import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea5ControlTemperatura } from './tarea5-control-temperatura';

describe('Tarea5ControlTemperatura', () => {
  let component: Tarea5ControlTemperatura;
  let fixture: ComponentFixture<Tarea5ControlTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea5ControlTemperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea5ControlTemperatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
