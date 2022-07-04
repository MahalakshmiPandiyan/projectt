import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtionalFeaturesComponent } from './addtional-features.component';

describe('AddtionalFeaturesComponent', () => {
  let component: AddtionalFeaturesComponent;
  let fixture: ComponentFixture<AddtionalFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtionalFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtionalFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
