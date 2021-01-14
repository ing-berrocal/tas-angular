import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViajesComponent } from './form-viajes.component';

describe('FormViajesComponent', () => {
  let component: FormViajesComponent;
  let fixture: ComponentFixture<FormViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
