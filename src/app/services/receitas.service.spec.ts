import { TestBed } from '@angular/core/testing';

import { ReceitasService } from './receitas.service';

describe('ReceitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitasService = TestBed.get(ReceitasService);
    expect(service).toBeTruthy();
  });
});
