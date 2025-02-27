import { TestBed } from '@angular/core/testing';

import { ViajeServicioService } from './viaje-servicio.service';

describe('ViajeServicioService', () => {
  let service: ViajeServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Listado de registros',
    (done: DoneFn) => {
    service.getListado().subscribe(value => {
      expect(value.length).toBe(4);
      done();
    });
  });
});
