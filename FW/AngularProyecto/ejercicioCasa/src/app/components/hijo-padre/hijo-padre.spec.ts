import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadre } from './hijo-padre';

describe('HijoPadre', () => {
  let component: HijoPadre;
  let fixture: ComponentFixture<HijoPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
