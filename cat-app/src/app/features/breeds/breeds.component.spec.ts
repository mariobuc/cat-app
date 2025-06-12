import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedsComponent } from './breeds.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BreedsComponent', () => {
  let component: BreedsComponent;
  let fixture: ComponentFixture<BreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreedsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the BreedsComponent', () => {
    expect(component).toBeTruthy();
  });
});
