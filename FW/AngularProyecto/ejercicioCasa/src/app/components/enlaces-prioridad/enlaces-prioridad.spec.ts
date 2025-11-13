import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesPrioridad } from './enlaces-prioridad';

describe('EnlacesPrioridad', () => {
  let component: EnlacesPrioridad;
  let fixture: ComponentFixture<EnlacesPrioridad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesPrioridad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesPrioridad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
