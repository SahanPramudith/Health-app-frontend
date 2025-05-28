import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistePateintService {

  private apiUrl = 'http://localhost:8080/patient/patient-save'; 

  constructor(private http:HttpClient) { }

  registerPatient(patientData: any) {
    return this.http.post(`${this.apiUrl}`, patientData);
  }
}
