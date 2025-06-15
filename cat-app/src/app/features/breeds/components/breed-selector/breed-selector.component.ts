import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { CatService } from '../../../../core/services/cat.service';




@Component({
  selector: 'app-breed-selector',
  templateUrl: './breed-selector.component.html',
  styleUrls: ['./breed-selector.component.scss']
})
export class BreedSelectorComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: string = '';

  @Output() breedSelected = new EventEmitter<string>();

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getBreeds().subscribe({
      next: (data) => this.breeds = data,
      error: (err) => console.error('Error al cargar razas', err)
    });
  }


  onBreedSelected(): void {
    this.breedSelected.emit(this.selectedBreed);
  }

}

