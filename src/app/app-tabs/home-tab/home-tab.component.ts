import { Component, OnInit } from '@angular/core';
import { mediaBase } from '../../contants';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent implements OnInit {
  mediaBase = mediaBase;
  constructor() {}

  ngOnInit(): void {}
}
