import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-snacks-tab',
  templateUrl: './snacks-tab.component.html',
  styleUrls: ['./snacks-tab.component.scss']
})
export class SnacksTabComponent implements OnInit {
  snacks = [
    {
      image: '../../../assets/images/snacks/banana.png',
      label: 'Banana'
    },
    {
      image: '../../../assets/images/snacks/tea.png',
      label: 'Tea'
    },
    {
      image: '../../../assets/images/snacks/milk.png',
      label: 'Milk'
    },
    {
      image: '../../../assets/images/snacks/icecream.png',
      label: 'Ice cream'
    },
    {
      image: '../../../assets/images/snacks/cake.png',
      label: 'Huge Cake'
    },
    {
      image: '../../../assets/images/snacks/pizza.png',
      label: 'Pizza'
    },
    {
      image: '../../../assets/images/snacks/mushroom.png',
      label: 'Magical mushrooms'
    },
    {
      image: '../../../assets/images/snacks/canned-tuna.png',
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
