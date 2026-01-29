import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPeliculas } from './agregar-peliculas';

describe('AgregarPeliculas', () => {
  let component: AgregarPeliculas;
  let fixture: ComponentFixture<AgregarPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPeliculas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
