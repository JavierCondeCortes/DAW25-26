import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACercaDe } from './a-cerca-de';

describe('ACercaDe', () => {
  let component: ACercaDe;
  let fixture: ComponentFixture<ACercaDe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACercaDe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACercaDe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
