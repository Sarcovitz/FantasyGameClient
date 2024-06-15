import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarComponent,
    FooterComponent,
    RouterModule  
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
