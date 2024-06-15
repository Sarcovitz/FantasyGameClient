import { Component } from '@angular/core';
import { LayoutModule } from 'app/core/shared/layout/layout.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
