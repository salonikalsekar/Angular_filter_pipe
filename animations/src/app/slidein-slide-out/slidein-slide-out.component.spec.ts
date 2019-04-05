import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinSlideOutComponent } from './slidein-slide-out.component';

describe('SlideinSlideOutComponent', () => {
  let component: SlideinSlideOutComponent;
  let fixture: ComponentFixture<SlideinSlideOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinSlideOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinSlideOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
