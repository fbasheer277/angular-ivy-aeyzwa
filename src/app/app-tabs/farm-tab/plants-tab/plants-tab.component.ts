import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plants-tab',
  templateUrl: './plants-tab.component.html',
  styleUrls: ['./plants-tab.component.scss']
})
export class PlantsTabComponent implements OnInit {
  plants = [
    {
      image: '../../../assets/images/plants/ferns.png',
      label: 'Ferns'
    },
    {
      image: '../../../assets/images/plants/palm.png',
      label: 'Palm'
    },
    {
      image: '../../../assets/images/plants/grass.png',
      label: 'Grass'
    },
    {
      image: '../../../assets/images/plants/plant.png',
      label: 'Some Plant'
    },
    {
      image: '../../../assets/images/plants/random-plant.png',
      label: 'Another Plant'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  doUrl(path): string {
    return `url(${path})`;
  }

}
