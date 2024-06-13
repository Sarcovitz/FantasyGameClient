import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarComponent,
  ],
  exports: [TopbarComponent]
})
export class NavigationModule { }
