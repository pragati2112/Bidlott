import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofplansComponent } from './listofplans.component';

describe('ListofplansComponent', () => {
  let component: ListofplansComponent;
  let fixture: ComponentFixture<ListofplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
