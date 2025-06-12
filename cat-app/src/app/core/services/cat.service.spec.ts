import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatService } from './cat.service';
import { CatImage } from 'src/app/core/models/cat-image.model';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
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

describe('CatService', () => {
  let service: CatService;
  let httpMock: HttpTestingController;

  const dummyImages: CatImage[] = [
    {
      id: 'abc1',
      url: 'https://example.com/image1.jpg',
      breeds: []
    },
    {
      id: 'abc2',
      url: 'https://example.com/image2.jpg',
      breeds: []
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatService]
    });
    service = TestBed.inject(CatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve cat images by breed ID', () => {
    const dummyImages: CatImage[] = [
    {
      id: '1',
      url: 'img1.jpg',
      breeds: []
    }
  ];

    const breedId = 'beng';

    service.getImagesByBreedId(breedId).subscribe(images => {
      expect(images).toEqual(dummyImages); 
    });

    const req = httpMock.expectOne((request) => {
  return request.url === 'https://api.thecatapi.com/v1/images/search' &&
         request.params.get('breed_id') === 'beng' &&
         request.params.get('limit') === '5';
});


    expect(req.request.method).toBe('GET');
    req.flush(dummyImages);
	
	httpMock.verify();

  });
});
