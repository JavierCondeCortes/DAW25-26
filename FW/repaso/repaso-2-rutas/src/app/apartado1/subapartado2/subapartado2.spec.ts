import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapartado2 } from './subapartado2';

describe('Subapartado2', () => {
  let component: Subapartado2;
  let fixture: ComponentFixture<Subapartado2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subapartado2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subapartado2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
