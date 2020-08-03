import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cp-color-gradient',
  templateUrl: './color-gradient.component.html',
  styleUrls: ['./color-gradient.component.scss'],
})
export class ColorGradientComponent implements OnInit {
  @ViewChild('colorGradient', { static: true })
  public colorGradient: ElementRef;

  constructor() {}

  ngOnInit() {}
}
