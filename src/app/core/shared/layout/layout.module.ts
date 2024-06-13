import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarComponent,
    FooterComponent
  ],
  exports: [
    TopbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
