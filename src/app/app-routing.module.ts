import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)},
  { path: 'training', loadChildren:()=>import('./pages/training/training.module').then(m=>m.TrainingModule)},
  { path: 'talent', loadChildren:()=>import('./pages/talent/talent.module').then(m=>m.TalentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
