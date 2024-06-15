import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  exports: [
    RouterOutlet,
    CommonModule
  ]
})
export class AppModule { }
