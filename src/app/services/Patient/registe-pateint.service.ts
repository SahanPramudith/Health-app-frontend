import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistePateintService {

  private apiUrl = 'http://localhost:8080/patient/patient-save';

  constructor(private http: HttpClient) { }

  registerPatient(patientData: any) {
    return this.http.post(`${this.apiUrl}`, patientData);
  }
  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/patient/getPatient')
  }

  deletePatient(patientId: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/patient/${patientId}`);
  }
}
