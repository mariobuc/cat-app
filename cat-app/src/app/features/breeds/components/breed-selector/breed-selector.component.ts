import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CatService, Breed } from '../../../../core/services/cat.service';

@Component({
  selector: 'app-breed-selector',
  templateUrl: './breed-selector.component.html',
})
export class BreedSelectorComponent implements OnInit {
  breeds: Breed[] = [];
  selectedBreedId: string = '';

  @Output() breedSelected = new EventEmitter<string>();

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((data: Breed[]) => {
      this.breeds = data;
    });
  }

  onSelect(): void {
    this.breedSelected.emit(this.selectedBreedId);
  }
}
