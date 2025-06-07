import { Routes } from '@angular/router';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
//import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

export const routes: Routes = [
    {
        path: 'patients',
        component:PatientManagementComponent
    },
    {
        path: 'appointment',
        component:AppointmentFormComponent
    },
    {
        path: 'dashboardCard',
        component:DashboardCardsComponent
    },
    
];
