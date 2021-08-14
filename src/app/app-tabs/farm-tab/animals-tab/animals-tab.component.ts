import { Component, OnInit } from '@angular/core';
import { mediaBase } from '../../../contants';

@Component({
  selector: 'app-animals-tab',
  templateUrl: './animals-tab.component.html',
  styleUrls: ['./animals-tab.component.scss']
})
export class AnimalsTabComponent implements OnInit {
  animals = [
    {
      image: mediaBase + 'animals/cow.png',
      label: 'Cow'
    },
    {
      image: mediaBase + 'animals/sheep.png',
      label: 'Sheep'
    },
    {
      image: mediaBase + 'animals/chicken.png',
      label: 'Chicken'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
  doUrl(path): string {
    return `url(${path})`;
  }
}
