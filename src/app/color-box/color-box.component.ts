import { Component, OnInit, Input } from '@angular/core';
import { Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'cp-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss'],
})
export class ColorBoxComponent implements OnInit {
  @Input() public color: Color;

  get bgColor(): string {
    return this.color?.rgba;
  }

  constructor() {}

  ngOnInit(): void {}
}
