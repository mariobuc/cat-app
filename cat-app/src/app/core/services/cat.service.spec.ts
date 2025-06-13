import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;
  let httpMock: HttpTestingController;

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
    const mockImages = [{ url: 'https://example.com/cat.jpg' }];
    service.getImagesByBreed('beng').subscribe(images => {
      expect(images).toEqual(mockImages);
    });

    const req = httpMock.expectOne(req =>
      req.url.includes('https://api.thecatapi.com/v1/images/search') && req.params.get('breed_id') === 'beng'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockImages);
  });
});
