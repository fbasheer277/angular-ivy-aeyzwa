import { Component } from '@angular/core';
import { navItems } from './app-routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wipro-assignment';
  navItems= navItems;
}
