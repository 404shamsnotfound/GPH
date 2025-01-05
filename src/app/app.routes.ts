import { Routes } from '@angular/router';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ticket', pathMatch: 'full' },
    { path: 'ticket', component: TicketComponent }
  ];
  
