import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { RegistePateintService } from '../../services/Patient/registe-pateint.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;
  appointment: any[] = [];
  patients: any[] = [];
  selectPatientId: number | null = null;
  Select: any;

  ngOnInit(): void {
    this.registerPatientService.getAllPatients().subscribe(date => {
      this.patients = date;
    })
  }

  constructor(private formBuilder: FormBuilder, private registerPatientService: RegistePateintService, private appointmentService: AppointmentService) {



    this.appointmentForm = this.formBuilder.group({
      type: '',
      gr: '',
      date: '',
      time: '',
      status: '',
      gNumber: '',
      roomNumber: '',
      adminId: '',
      patientId: ''
    });
  }


  onSubmit() {
    this.appointmentService.saveAppointment(this.appointmentForm.value).subscribe({
      next: (response) => {
        console.log('Appointment created successfully:', response);
        this.appointmentForm.reset();
      },
      error: (error) => {
        console.error('Error creating appointment:', error);
      }
    });
  }
}

