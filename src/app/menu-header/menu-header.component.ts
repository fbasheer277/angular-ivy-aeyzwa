import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navItems } from '../app-routing';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  navItems = navItems;
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
