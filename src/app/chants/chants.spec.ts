import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chants } from './chants';

describe('Chants', () => {
  let component: Chants;
  let fixture: ComponentFixture<Chants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
