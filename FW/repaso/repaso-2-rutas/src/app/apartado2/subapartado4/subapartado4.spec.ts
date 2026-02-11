import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapartado4 } from './subapartado4';

describe('Subapartado4', () => {
  let component: Subapartado4;
  let fixture: ComponentFixture<Subapartado4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subapartado4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subapartado4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
