import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursofavoritoComponent } from './cursofavorito.component';

describe('CursofavoritoComponent', () => {
  let component: CursofavoritoComponent;
  let fixture: ComponentFixture<CursofavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursofavoritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursofavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
