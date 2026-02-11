import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapartado3 } from './subapartado3';

describe('Subapartado3', () => {
  let component: Subapartado3;
  let fixture: ComponentFixture<Subapartado3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subapartado3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subapartado3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
