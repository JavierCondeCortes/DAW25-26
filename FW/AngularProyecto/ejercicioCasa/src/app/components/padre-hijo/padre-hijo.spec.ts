import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijo } from './padre-hijo';

describe('PadreHijo', () => {
  let component: PadreHijo;
  let fixture: ComponentFixture<PadreHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreHijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
