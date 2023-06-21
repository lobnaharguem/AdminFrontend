import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetechnologieComponent } from './updatetechnologie.component';

describe('UpdatetechnologieComponent', () => {
  let component: UpdatetechnologieComponent;
  let fixture: ComponentFixture<UpdatetechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetechnologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
