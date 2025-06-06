import { Routes } from '@angular/router';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

export const routes: Routes = [
    {
        path: 'patients',
        component:PatientManagementComponent
    },
    {
        path: 'appointment',
        component:AppointmentFormComponent
    },
    
];
