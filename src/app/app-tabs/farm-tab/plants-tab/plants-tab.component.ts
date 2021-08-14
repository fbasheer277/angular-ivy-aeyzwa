import { Component, OnInit } from '@angular/core';
import { mediaBase } from '../../../contants';

@Component({
  selector: 'app-plants-tab',
  templateUrl: './plants-tab.component.html',
  styleUrls: ['./plants-tab.component.scss']
})
export class PlantsTabComponent implements OnInit {
  plants = [
    {
      image: mediaBase + 'plants/ferns.png',
      label: 'Ferns'
    },
    {
      image: mediaBase + 'plants/palm.png',
      label: 'Palm'
    },
    {
      image: mediaBase + 'plants/grass.png',
      label: 'Grass'
    },
    {
      image: mediaBase + 'plants/plant.png',
      label: 'Some Plant'
    },
    {
      image: mediaBase + 'plants/random-plant.png',
      label: 'Another Plant'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
  doUrl(path): string {
    return `url(${path})`;
  }
}
