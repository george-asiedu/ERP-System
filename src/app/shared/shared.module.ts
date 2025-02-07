import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import {RouterLink} from '@angular/router';


@NgModule({
  declarations: [
    CongratulationsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterLink
  ]
})
export class SharedModule { }
