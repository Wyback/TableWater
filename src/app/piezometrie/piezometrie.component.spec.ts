import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiezometrieComponent } from './piezometrie.component';

describe('PiezometrieComponent', () => {
  let component: PiezometrieComponent;
  let fixture: ComponentFixture<PiezometrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiezometrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiezometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
