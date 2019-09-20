import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysocityComponent } from './mysocity.component';

describe('MysocityComponent', () => {
  let component: MysocityComponent;
  let fixture: ComponentFixture<MysocityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysocityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
