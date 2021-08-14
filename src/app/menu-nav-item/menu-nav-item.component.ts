import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-menu-nav-item',
  templateUrl: './menu-nav-item.component.html',
  styleUrls: ['./menu-nav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuNavItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded;
  @Input() item: any;
  @Input() depth: number;
  @Input() parent = '';
  @Input() floating = false;

  constructor( ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    
  }

  onItemSelected(event) {
    if (this.item.children && this.item.children.length) {
      this.expanded = !this.expanded;      
      event.stopPropagation();  
    }
  }

}

