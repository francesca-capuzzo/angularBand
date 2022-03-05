import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourElementComponent } from './tour-element.component';

describe('TourElementComponent', () => {
  let component: TourElementComponent;
  let fixture: ComponentFixture<TourElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
