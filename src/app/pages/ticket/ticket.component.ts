import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BreadcrumbsComponent } from '../../breadcrumbs/breadcrumbs.component';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ticket',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BreadcrumbsComponent,
    PageTitleComponent
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  breadcrumbList = [
    { label: 'الرئيسية', path: '/home' },
    { label: 'عربات الجولف', path: '/golf-cars' },
    { label: 'حجوزاتي', path: '/tickets' }
  ];
  pageTitle = {
    title:"بطاقة صعود الرحلة",
    desc:"جميع البيانات والمعلومات المتعلقة بالخدمة"
  }
}
