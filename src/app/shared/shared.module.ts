import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import {RouterLink} from '@angular/router';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    CongratulationsComponent,
    ThemeSwitcherComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterLink
  ],
  exports: [ThemeSwitcherComponent, NavbarComponent, CongratulationsComponent]
})
export class SharedModule { }
