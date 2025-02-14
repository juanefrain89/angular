import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalllenadoComponent } from './totalllenado.component';

describe('TotalllenadoComponent', () => {
  let component: TotalllenadoComponent;
  let fixture: ComponentFixture<TotalllenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalllenadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalllenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
