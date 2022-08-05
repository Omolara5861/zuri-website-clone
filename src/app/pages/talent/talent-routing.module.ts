import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TalentComponent } from './talent.component';

const routes: Routes = [
  
  { path: '', component: TalentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TalentRoutingModule { }
