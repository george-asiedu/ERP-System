import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterOutlet
  ]
})
export class AdminModule { }
