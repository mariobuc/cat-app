import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { BreedSelectorComponent } from './components/breed-selector/breed-selector.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { BreedTableComponent } from './components/breed-table/breed-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BreedsComponent,
    BreedSelectorComponent,
    BreedDetailComponent,
    BreedTableComponent
  ],
  imports: [
    CommonModule,
	FormsModule,
    BreedsRoutingModule
  ]
})
export class BreedsModule { }
