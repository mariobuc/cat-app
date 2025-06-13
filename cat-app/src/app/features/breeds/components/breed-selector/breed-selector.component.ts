import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../../core/services/cat.service';

@Component({
  selector: 'app-breed-selector',
  templateUrl: './breed-selector.component.html',
  styleUrls: ['./breed-selector.component.scss']
})
export class BreedSelectorComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: string = '';

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getBreeds().subscribe((data: any[]) => {
      this.breeds = data;
    });
  }

  onBreedSelected() {
    
  }
}
