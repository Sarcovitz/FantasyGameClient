import { Component } from '@angular/core';
import { LayoutModule } from '../layout.module';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  imports: [LayoutModule]
})
export class TopbarComponent {

}
