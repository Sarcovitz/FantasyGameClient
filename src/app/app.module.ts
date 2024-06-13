import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './core/shared/navigation/topbar/topbar.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    TopbarComponent
  ],
  exports: [
    RouterOutlet,
    TopbarComponent
  ]
})
export class AppModule { }
