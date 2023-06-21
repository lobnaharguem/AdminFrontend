import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcandidatureComponent } from './viewcandidature.component';

describe('ViewcandidatureComponent', () => {
  let component: ViewcandidatureComponent;
  let fixture: ComponentFixture<ViewcandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcandidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
