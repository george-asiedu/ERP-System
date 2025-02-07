import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CongratulationsComponent} from './congratulations/congratulations.component';

const routes: Routes = [
  {path: '', component: CongratulationsComponent, title: 'Congratulations'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
