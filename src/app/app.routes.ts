import { Routes } from '@angular/router';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

export const routes: Routes = [
    {
        path: 'patients',
        component:PatientManagementComponent
    },
    {
        path: 'user-management',
        component:UserManagementComponent
    },
    
];
