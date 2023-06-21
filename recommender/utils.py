import re
import spacy
import nltk

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

test_job = """Job Title: Software Testing and Automation Engineer

We are seeking a talented Software Testing and Automation Engineer to join our team. The successful candidate will be responsible for creating and executing software testing plans and automated test scripts, ensuring the timely delivery of high-quality software releases.

Responsibilities:

Develop and execute automated test scripts using tools such as Selenium, Appium, and TestNG.
Create and execute manual test cases.
Work in Agile teams to ensure high-quality software releases.
Collaborate with developers and other stakeholders to identify and resolve defects.
Conduct regression testing and provide testing reports to the project team.
Assist with the development of automated test scripts.
Continuously improve testing processes and methodologies.
Requirements:

Proven experience as a Software Testing and Automation Engineer or similar role.
Strong experience with automated testing tools such as Selenium, Appium, and TestNG.
Familiarity with Agile methodologies and experience working in Agile teams.
Knowledge of programming languages such as Java and Python.
Experience with continuous integration tools such as Jenkins and TeamCity.
Experience with defect tracking and project management tools such as JIRA.
Strong communication and collaboration skills.
Bachelor's degree in Computer Science, Software Engineering, or a related field.
If you have a passion for software testing and automation, and you are looking for an exciting new opportunity to showcase your skills, we would love to hear from you. Please submit your resume and a cover letter highlighting your experience with automated testing tools and other relevant technologies."""

with open('vectorizer.pickle', 'rb') as handle:
    vectorizer = pickle.load(handle)

with open('lda_model.pickle', 'rb') as handle:
    lda_model = pickle.load(handle)

blacklist = ["career", "opportunity", "work", "team", "mention", "experience", "knowledge", "skill", "ability", "company", "date", "qualification", "website", "open", "develop",
             "title", "excellent", "position", "email", "letter", "language", "post", "english", "center", "title", "salary", "follow", "thank", "job", "good", "time", "great", "project", "required", "year", "month", "day",
             "form"]

nlp = spacy.load('en_core_web_sm')


def clean_text(text):
    # Remove URLs and anything starting with http or www
    text = re.sub(r'http\S+', '', text)
    text = re.sub(r'www\S+', '', text)

    # Lowercase the text
    text = text.lower().replace("\n", " ")

    # Remove special characters and numbers
    text = re.sub('[^a-zA-Z]', ' ', text)

    # Remove multiple whitespaces
    text = re.sub(r'\s+', ' ', text)

    # Tokenize the text
    tokens = nltk.word_tokenize(text)

    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [token.strip()
                       for token in tokens if token not in stop_words]

    # Remove adverbs
    doc = nlp(' '.join(filtered_tokens))
    filtered_tokens = [token.text for token in doc if token.pos_ != 'ADV']

    # Remove named entities
    doc = nlp(' '.join(filtered_tokens))
    filtered_tokens = [token.text for token in doc if token.ent_type_ == '']

    # Remove single-character tokens and blacklist words
    filtered_tokens = [token for token in filtered_tokens if len(
        token) > 1 and not any([x in token for x in blacklist])]

    # Lemmatize the tokens
    lemmatizer = WordNetLemmatizer()
    lemmatized_tokens = [lemmatizer.lemmatize(
        token) for token in filtered_tokens]

    # Change '-ing' verbs to root form
    final_tokens = [lemmatizer.lemmatize(token[:-3], pos='v') if token.endswith(
        'ing') and lemmatizer.lemmatize(token, pos='v') != token else token for token in lemmatized_tokens]

    # Join the tokens back into a string
    cleaned_text = ' '.join(final_tokens)

    return cleaned_text


def calculate_similarity(job_description, resume):
    # Create a TF-IDF vectorizer object
    vectorizer = TfidfVectorizer(stop_words='english')

    # Fit and transform the job description and resume to TF-IDF matrices
    job_description_tfidf = vectorizer.fit_transform([job_description])
    resume_tfidf = vectorizer.transform([resume])

    # Calculate the cosine similarity between the two TF-IDF matrices
    cosine_similarity = np.dot(
        job_description_tfidf.toarray(), resume_tfidf.toarray().T)

    # Return the cosine similarity score
    return cosine_similarity[0][0]