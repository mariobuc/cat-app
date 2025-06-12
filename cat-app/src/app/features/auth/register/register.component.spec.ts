import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { ActivatedRoute } from '@angular/router';

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


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, JwtHelperService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the RegisterComponent', () => {
    expect(component).toBeTruthy();
  });
});
