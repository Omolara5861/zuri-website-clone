import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingModule } from './pages/training/training.module';
// import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    // TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,TrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
