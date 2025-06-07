import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   private apiUrl = 'http://localhost:8080/appointment/addAppointment';

  constructor(private http:HttpClient) {}

  saveAppointment(appointment: any) {
    return this.http.post(this.apiUrl, appointment);
  }



}
