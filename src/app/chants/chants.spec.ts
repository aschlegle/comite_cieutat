import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ChantsComponent } from './chants';

describe('Chants', () => {
  let component: ChantsComponent;
  let fixture: ComponentFixture<ChantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
