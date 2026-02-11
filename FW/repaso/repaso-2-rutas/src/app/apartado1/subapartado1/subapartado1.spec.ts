import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapartado1 } from './subapartado1';

describe('Subapartado1', () => {
  let component: Subapartado1;
  let fixture: ComponentFixture<Subapartado1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subapartado1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subapartado1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
