import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Respuestas1Component } from './respuestas1.component';

describe('Respuestas1Component', () => {
  let component: Respuestas1Component;
  let fixture: ComponentFixture<Respuestas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Respuestas1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Respuestas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
