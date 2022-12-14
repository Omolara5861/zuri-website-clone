import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrainingComponent } from './training.component';

const routes: Routes = [
  
  { path: '', component: TrainingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TrainingRoutingModule { }
