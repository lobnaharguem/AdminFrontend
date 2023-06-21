import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetechnologieComponent } from './listetechnologie.component';

describe('ListetechnologieComponent', () => {
  let component: ListetechnologieComponent;
  let fixture: ComponentFixture<ListetechnologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetechnologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListetechnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
