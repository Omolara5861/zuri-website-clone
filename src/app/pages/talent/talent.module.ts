import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';



@NgModule({
  declarations: [
    TalentComponent
  ],
  imports: [
    CommonModule,TalentRoutingModule
  ]
})
export class TalentModule { }
