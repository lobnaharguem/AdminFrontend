import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterrecruteurComponent } from './ajouterrecruteur.component';

describe('AjouterrecruteurComponent', () => {
  let component: AjouterrecruteurComponent;
  let fixture: ComponentFixture<AjouterrecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterrecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterrecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
