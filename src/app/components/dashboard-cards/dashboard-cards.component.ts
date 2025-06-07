import { Component, OnInit } from '@angular/core';
import { RegistePateintService } from '../../services/Patient/registe-pateint.service';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  imports: [NgClass,NgIf,NgFor],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.css'
})
export class DashboardCardsComponent implements OnInit {
  patients: any[] = [];
  appointments: any[] = [];

  constructor(private patientservice: RegistePateintService, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.patientservice.getAllPatients().subscribe(date => {
      this.patients = date;
      //this.appointmentService.().subscribe(data => this.appointments = data);

    })
  }

  activeTab = 'dashboard';

  selectTab(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.activeTab = value;
  }



}
