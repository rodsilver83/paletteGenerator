import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGroupComponent } from './color-group.component';

describe('ColorGroupComponent', () => {
  let component: ColorGroupComponent;
  let fixture: ComponentFixture<ColorGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
