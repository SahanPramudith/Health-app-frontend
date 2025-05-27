import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-management',
  imports: [ReactiveFormsModule,NgIf,NgClass ],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {

  patientForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  get fullName() {
    return this.patientForm.get('fullName');
  }
  get age() {
    return this.patientForm.get('age');
  }



  onSubmit() {
    console.log(this.patientForm);
  }
    
}
