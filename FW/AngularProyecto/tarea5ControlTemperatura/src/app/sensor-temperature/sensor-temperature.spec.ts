import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTemperature } from './sensor-temperature';

describe('SensorTemperature', () => {
  let component: SensorTemperature;
  let fixture: ComponentFixture<SensorTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
