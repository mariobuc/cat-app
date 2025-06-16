import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedSelectorComponent } from './components/breed-selector/breed-selector.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { BreedTableComponent } from './components/breed-table/breed-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BreedSelectorComponent,
    BreedDetailComponent,
    BreedTableComponent
  ],
  imports: [
    CommonModule,
	  FormsModule,
    BreedsRoutingModule,
    ReactiveFormsModule,

    // Angular Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    NgbCarouselModule

  ],
  exports: [BreedSelectorComponent, 
    BreedDetailComponent
  ]


})
export class BreedsModule { }
