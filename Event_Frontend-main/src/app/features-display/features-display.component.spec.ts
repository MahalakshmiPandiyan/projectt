import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDisplayComponent } from './features-display.component';

describe('FeaturesDisplayComponent', () => {
  let component: FeaturesDisplayComponent;
  let fixture: ComponentFixture<FeaturesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
