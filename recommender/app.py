from flask import Flask, jsonify, request
from utils import clean_text, vectorizer, lda_model, calculate_similarity
from resume_parser import resumeparse
import base64
import numpy as np
from googletrans import Translator
import PyPDF2
from flask_cors import CORS

translator = Translator()


app = Flask(__name__)
CORS(app)



@app.route('/classify', methods=("POST",))
def classify():
    """
    API Documentation for classify() function:

    This function is a Flask endpoint that accepts a POST request containing a base64-encoded resume file and a job description. It processes the resume and job description to classify the resume as either accepted or rejected based on various factors, such as topic similarity and term similarity.

    Endpoint URL: /classify
    HTTP Method: POST

    Parameters:
    - file (required): base64-encoded resume file
    - file_name (optional): name of the resume file (default: 'uploaded_resume.pdf')
    - job_description (required): job description to compare the resume against

    Returns:
    - If the processing is successful, the function returns a JSON object with the following keys:
        - job_topic: the dominant topic in the job4 description
        - resume_topic: the dominant topic in the resume
        - job_proba: the probability of the job description belonging to its dominant topic
        - resume_proba: the probability of the resume belonging to its dominant topic
        - term_similarity: the term similarity between the cleaned job description and resume text
        - result: either "Accepted" or "Rejected" depending on the classification of the resume

    - If any errors occur during processing, the function returns a string error message along with a 400 HTTP status code.

    """
    # Decode the base64-encoded file
    if 'file' not in request.json:
        return 'No file uploaded', 400
    file_data = base64.b64decode(request.json['file'])
    if 'job_description' not in request.json:
        return 'No job description found', 400
    # Get the file name from the JSON request or use a default name
    file_name = request.json.get('file_name', 'uploaded_resume.pdf')
    job_description = request.json['job_description']

    with open(file_name, 'wb') as f:
        f.write(file_data)

    data = resumeparse.read_file(file_name)
    if not data["skills"]:
        return 'Extraction error', 400

    data = " ".join(data["skills"])

    pdfFileObj = open(file_name, 'rb')

    # creating a pdf reader object
    pdfReader = PyPDF2.PdfReader(pdfFileObj)

    # creating a page object
    pageObj = pdfReader.pages[0]

    exp = pageObj.extract_text().split("\n")
    exp = " ".join([x for x in exp if len(x.split()) >= 10])
    data = data + exp
    try:
        data = translator.translate(data, dest="en").text
    except:
        return 'Resume translation error', 400

    try:
        job_description = translator.translate(job_description, dest="en").text
    except:
        return 'Job translation error', 400
    job_description = clean_text(job_description)
    data = clean_text(data)
    new_text_bow = vectorizer.transform([job_description])
    topic_probabilities = lda_model.transform(new_text_bow)
    job_topic = topic_probabilities.argmax()
    job_proba = topic_probabilities[0, job_topic]
    new_text_bow = vectorizer.transform([data])
    topic_probabilities = lda_model.transform(new_text_bow)
    resume_topic = topic_probabilities.argmax()
    resume_proba = topic_probabilities[0, resume_topic]
    term_similarity = calculate_similarity(job_description, data)
    d = {"job_topic": job_topic, "resume_topic": resume_topic, "resume_proba": resume_proba,
         "job_proba": job_proba, "term_similarity": term_similarity}
    for  k in d.keys():
        d[k] = str(d[k])
    if (job_topic == resume_topic) and (np.abs(resume_proba - job_proba) <= 0.15) and (term_similarity >= 0.35):
        d["result"] = "Accepted"
    else:
        d["result"] = "Rejected"
    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True)
