import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdclubDetailComponent } from './edclub-detail.component';

describe('EdclubDetailComponent', () => {
  let component: EdclubDetailComponent;
  let fixture: ComponentFixture<EdclubDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdclubDetailComponent]
    });
    fixture = TestBed.createComponent(EdclubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
