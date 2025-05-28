import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistePateintService } from '../../services/Patient/registe-pateint.service';

@Component({
  selector: 'app-patient-management',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {

  patientForm!: FormGroup;

  constructor(private fb: FormBuilder,private registerPatientService: RegistePateintService) {
    this.patientForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      nic: ['', [Validators.required,] ], 
      bloodGroup: ['',[Validators.required, Validators.pattern('^(A|B|AB|O)[+-]$')]],
      category: [''],
      note: [''],
      allergic: ['No', [Validators.required, Validators.pattern('^(Yes|No)$')]],
    });
  }

  get fullName() {
    return this.patientForm.get('fullName');
  }
  get age() {
    return this.patientForm.get('age');
  }

  onSubmit() {
    console.log('Form submitted', this.patientForm.value);
    this.registerPatientService.registerPatient(this.patientForm.value).subscribe({
      next: (response) => {
        console.log('Patient registered successfully', response);
        this.patientForm.reset();
      }
    })
  }

}
