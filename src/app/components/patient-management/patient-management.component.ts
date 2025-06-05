import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistePateintService } from '../../services/Patient/registe-pateint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-management',
  imports: [ReactiveFormsModule, NgIf, NgClass, NgFor,],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent implements OnInit {

  patientForm!: FormGroup;
  patients: any[] = [];

  showModal = false;
  modalTitle = 'Register Patient';
  selectedPatientId: number | null = null;

  ngOnInit() {
    this.loadPatients();
  }
  constructor(private fb: FormBuilder, private registerPatientService: RegistePateintService) {



    this.patientForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      nic: ['', [Validators.required,]],
      bloodGroup: ['', [Validators.required, Validators.pattern('^(A|B|AB|O)[+-]$')]],
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
    const formValue = this.patientForm.value;
    const patientData = {
      ...formValue,
      name: formValue.fullName, // map fullName to name
    };
    delete patientData.fullName;

    if (this.selectedPatientId) {
      patientData.id = this.selectedPatientId;
      this.registerPatientService.updatePatient(patientData).subscribe({
        next: () => {
          this.loadPatients();
          this.closeModal();
          this.patientForm.reset({ allergic: 'No' });
          this.selectedPatientId = null;
        }
      });
    } else {
      this.registerPatientService.registerPatient(patientData).subscribe({
        next: () => {
          this.loadPatients();
          this.closeModal();
          this.patientForm.reset({ allergic: 'No' });
        }
      });
    }
  }

  loadPatients() {
    this.registerPatientService.getAllPatients().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.patients = data;
      },
      error: (err) => console.error('Failed to fetch patients', err)
    });
  }

  deletePatient(patientId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this patient!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerPatientService.deletePatient(patientId).subscribe({
          next: (response) => {
            Swal.fire('Deleted!', 'Patient has been deleted.', 'success');
            this.loadPatients();
          },
          error: (err) => {
            Swal.fire('Error!', 'Failed to delete patient.', 'error');
            console.error('Failed to delete patient', err);
          }
        });
      }
    });
  }

  openAddModal() {
    this.modalTitle = 'Register Patient';
    this.selectedPatientId = null;
    this.patientForm.reset({ allergic: 'No' }); // Reset form and set default
    this.showModal = true;
  }

  openUpdateModal(patient: any) {
    this.modalTitle = 'Update Patient';
    this.selectedPatientId = patient.id;
    this.patientForm.patchValue({
      fullName: patient.name, // map name to fullName
      age: patient.age,
      gender: patient.gender,
      contact: patient.contact,
      email: patient.email,
      address: patient.address,
      nic: patient.nic,
      bloodGroup: patient.bloodGroup,
      category: patient.category,
      note: patient.note,
      allergic: patient.allergic,
    });
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
