import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerecruteurComponent } from './listerecruteur.component';

describe('ListerecruteurComponent', () => {
  let component: ListerecruteurComponent;
  let fixture: ComponentFixture<ListerecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
