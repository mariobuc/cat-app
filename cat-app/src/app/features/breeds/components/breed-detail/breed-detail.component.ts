import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatService, Breed, CatImage } from 'src/app/core/services/cat.service';

providers: [
	{
	  provide: ActivatedRoute,
	  useValue: {
		snapshot: {
		  paramMap: {
			get: (key: string) => 'beng'
		  }
		}
	  }
	}
]

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
})
export class BreedDetailComponent implements OnChanges {
  @Input() breedId: string = '';
  breed: Breed | null = null;
  images: CatImage[] = [];


  constructor(private catService: CatService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const breedId = this.route.snapshot.paramMap.get('id');
    if (breedId) {
      this.catService.getImagesByBreedId(breedId).subscribe((images: CatImage[]) => {
        this.images = images;
      });
    }
  }



  ngOnChanges(): void {
    if (this.breedId) {
      this.catService.getBreedById(this.breedId).subscribe((data: Breed) => {
        this.breed = data;
      });

      this.catService.getImagesByBreedId(this.breedId).subscribe((data: CatImage[]) => {
        this.images = data;

      });
    }
  }
}
