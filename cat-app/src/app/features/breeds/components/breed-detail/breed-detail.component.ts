import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html'
})
export class BreedDetailComponent {
  @Input() breed: any;
  @Input() images: any[] = [];
}
