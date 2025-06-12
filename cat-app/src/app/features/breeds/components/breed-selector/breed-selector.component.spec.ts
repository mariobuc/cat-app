import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedSelectorComponent } from './breed-selector.component';
import { CatService } from 'src/app/core/services/cat.service';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BreedDetailComponent } from '../breed-detail/breed-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


providers: [
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService,
  {
    provide: ActivatedRoute,
    useValue: {
      snapshot: {
        paramMap: {
          get: () => 'beng', // o el id que se espera
        }
      }
    }
  }
]


describe('BreedSelectorComponent', () => {
  let component: BreedSelectorComponent;
  let fixture: ComponentFixture<BreedSelectorComponent>;
  let mockCatService: jasmine.SpyObj<CatService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CatService', ['getBreeds']);
    await TestBed.configureTestingModule({
      declarations: [BreedSelectorComponent, BreedDetailComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: CatService, useValue: spy }, JwtHelperService]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedSelectorComponent);
    component = fixture.componentInstance;
    mockCatService = TestBed.inject(CatService) as jasmine.SpyObj<CatService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load breeds on init', () => {
    const dummyBreeds = [{ id: 'abys', name: 'Abyssinian' }];
    mockCatService.getBreeds.and.returnValue(of(dummyBreeds));

    component.ngOnInit();

    expect(component.breeds).toEqual(dummyBreeds);
    expect(mockCatService.getBreeds).toHaveBeenCalled();
  });
});
