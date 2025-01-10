import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficarecomendacionComponent } from './graficarecomendacion.component';

describe('GraficarecomendacionComponent', () => {
  let component: GraficarecomendacionComponent;
  let fixture: ComponentFixture<GraficarecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficarecomendacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficarecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
