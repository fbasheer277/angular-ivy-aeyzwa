import { Component, OnInit } from '@angular/core';
import { navItems } from 'src/app/app-routing';

@Component({
  selector: 'app-farm-tab',
  templateUrl: './farm-tab.component.html',
  styleUrls: ['./farm-tab.component.scss']
})
export class FarmTabComponent implements OnInit {
  base = navItems[1].url;
  farmLinks = navItems[1].children;
  activeLink;
  constructor() { }

  ngOnInit(): void {
     if (this.farmLinks) {
      this.activeLink = this.farmLinks[0].url
     }
  }

}
