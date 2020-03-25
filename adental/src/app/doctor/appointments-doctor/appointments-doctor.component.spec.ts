import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsDoctorComponent } from './appointments-doctor.component';

describe('AppointmentsDoctorComponent', () => {
  let component: AppointmentsDoctorComponent;
  let fixture: ComponentFixture<AppointmentsDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
