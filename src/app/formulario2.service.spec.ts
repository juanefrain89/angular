import { TestBed } from '@angular/core/testing';

import { Formulario2Service } from './formulario2.service';

describe('Formulario2Service', () => {
  let service: Formulario2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formulario2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
