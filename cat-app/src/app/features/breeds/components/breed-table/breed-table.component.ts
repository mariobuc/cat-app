import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed-table',
  templateUrl: './breed-table.component.html'
})
export class BreedTableComponent implements OnInit {
  @Input() breeds: any[] = [];
  filterText: string = '';
  filteredBreeds: any[] = [];

  ngOnInit() {
    this.filteredBreeds = this.breeds;
  }

  filter() {
    this.filteredBreeds = this.breeds.filter(breed =>
      breed.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
