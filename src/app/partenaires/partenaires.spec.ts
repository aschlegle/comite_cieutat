import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PartenairesComponent } from './partenaires';

describe('Partenaires', () => {
  let component: PartenairesComponent;
  let fixture: ComponentFixture<PartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenairesComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
