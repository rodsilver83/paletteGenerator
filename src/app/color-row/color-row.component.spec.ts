import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRowComponent } from './color-row.component';

describe('ColorRowComponent', () => {
  let component: ColorRowComponent;
  let fixture: ComponentFixture<ColorRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
