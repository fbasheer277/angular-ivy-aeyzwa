import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-tab',
  templateUrl: './animals-tab.component.html',
  styleUrls: ['./animals-tab.component.scss']
})
export class AnimalsTabComponent implements OnInit {
  animals = [
    {
      image: '../../../assets/images/animals/cow.png',
      label: 'Cow'
    },
    {
      image: '../../../assets/images/animals/sheep.png',
      label: 'Sheep'
    },
    {
      image: '../../../assets/images/animals/chicken.png',
      label: 'Chicken'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  doUrl(path): string {
    return `url(${path})`;
  }

}
