import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercepcionComponent } from './percepcion.component';

describe('PercepcionComponent', () => {
  let component: PercepcionComponent;
  let fixture: ComponentFixture<PercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PercepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
