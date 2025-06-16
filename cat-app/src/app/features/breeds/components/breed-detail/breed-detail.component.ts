import { Component, Input, OnChanges } from '@angular/core';
import { CatService } from 'src/app/core/services/cat.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html'
})
export class BreedDetailComponent implements OnChanges {
  
  @Input() breedId: string | null = null;
  breed: any;
  images: any[] = [];

  constructor(private catService: CatService) {}

  ngOnChanges(): void {
    if (this.breedId) {
      this.catService.getBreedById(this.breedId).subscribe({
        next: (data) => {
          this.breed = data;
          this.images = data.images || [];
        },
        error: (err) => console.error('Error al cargar detalles', err)
      });
    }
  }
}
