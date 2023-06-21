import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertechnologieComponent } from './ajoutertechnologie.component';

describe('AjoutertechnologieComponent', () => {
  let component: AjoutertechnologieComponent;
  let fixture: ComponentFixture<AjoutertechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutertechnologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutertechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
