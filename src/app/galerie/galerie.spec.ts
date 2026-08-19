import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { GalerieComponent } from './galerie';

describe('Galerie', () => {
  let component: GalerieComponent;
  let fixture: ComponentFixture<GalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
