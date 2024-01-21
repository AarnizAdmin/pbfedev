import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdclubComponent } from './edclub.component';

describe('EdclubComponent', () => {
  let component: EdclubComponent;
  let fixture: ComponentFixture<EdclubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdclubComponent]
    });
    fixture = TestBed.createComponent(EdclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
