import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BreedTableComponent } from './breed-table.component';
import { ActivatedRoute } from '@angular/router';
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

describe('BreedTableComponent', () => {
  let component: BreedTableComponent;
  let fixture: ComponentFixture<BreedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedTableComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
