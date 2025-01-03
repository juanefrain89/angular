import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuestas2Component } from './respuestas2.component';

describe('Respuestas2Component', () => {
  let component: Respuestas2Component;
  let fixture: ComponentFixture<Respuestas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Respuestas2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuestas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
