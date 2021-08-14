import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { mediaBase } from '../../contants';

@Component({
  selector: 'app-snacks-tab',
  templateUrl: './snacks-tab.component.html',
  styleUrls: ['./snacks-tab.component.scss']
})
export class SnacksTabComponent implements OnInit {
  snacks = [
    {
      image: mediaBase + 'snacks/banana.png',
      label: 'Banana'
    },
    {
      image: mediaBase + 'snacks/tea.png',
      label: 'Tea'
    },
    {
      image: mediaBase + 'snacks/milk.png',
      label: 'Milk'
    },
    {
      image: mediaBase + 'snacks/icecream.png',
      label: 'Ice cream'
    },
    {
      image: mediaBase + 'snacks/cake.png',
      label: 'Huge Cake'
    },
    {
      image: mediaBase + 'snacks/pizza.png',
      label: 'Pizza'
    },
    {
      image: mediaBase + 'snacks/mushroom.png',
      label: 'Magical mushrooms'
    },
    {
      image: mediaBase + 'snacks/canned-tuna.png',
      label: 'Tuna'
    }
  ]

  snackFiltersForm = this.fb.group({
    searchText: [''],
  });
  filteredSnacks = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filteredSnacks = this.snacks;
  }
  doUrl(path): string {
    return `url(${path})`;
  }
  filterSnacks(): void {
    let searchText = this.snackFiltersForm.controls.searchText.value.toLowerCase();
    this.filteredSnacks = this.snacks.filter( snack => {
      return snack.label.toLowerCase().includes(searchText);
    });
  }
  clearSearch(): void {
    this.snackFiltersForm.controls.searchText.reset();
    this.filteredSnacks = this.snacks;
  }
  handleBlur(): void {
    if (this.snackFiltersForm.controls.searchText.value) {return;} 
    else this.clearSearch();
  }

}
