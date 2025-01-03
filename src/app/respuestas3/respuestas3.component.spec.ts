import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuestas3Component } from './respuestas3.component';

describe('Respuestas3Component', () => {
  let component: Respuestas3Component;
  let fixture: ComponentFixture<Respuestas3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Respuestas3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuestas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
