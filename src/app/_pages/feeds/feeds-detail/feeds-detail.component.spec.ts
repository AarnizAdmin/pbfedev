import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsDetailComponent } from './feeds-detail.component';

describe('FeedsDetailComponent', () => {
  let component: FeedsDetailComponent;
  let fixture: ComponentFixture<FeedsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedsDetailComponent]
    });
    fixture = TestBed.createComponent(FeedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
