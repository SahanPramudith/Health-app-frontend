import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { DashboardCardsComponent } from "./components/dashboard-cards/dashboard-cards.component";
import { UserManagementComponent } from "./components/user-management/user-management.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SidebarComponent, HeaderComponent, DashboardCardsComponent, UserManagementComponent]
})
export class AppComponent {
  title = 'frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
