import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EventServiceService } from './event-service.service';
import { AppConstant } from './../appConstants';

describe('EventServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EventServiceService, AppConstant]
    });
  });

  it('should be created', inject([EventServiceService], (service: EventServiceService) => {
    expect(service).toBeTruthy();
  }));
});
