import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import {RouterLink} from '@angular/router';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';


@NgModule({
  declarations: [
    CongratulationsComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterLink
  ]
})
export class SharedModule { }
