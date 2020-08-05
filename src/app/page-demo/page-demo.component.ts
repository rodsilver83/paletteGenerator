import { Component, OnInit, Input } from '@angular/core';
import { Palette } from '../color-palette/color-palette.component';
import { Color } from '@angular-material-components/color-picker';

@Component({
	selector: 'cp-page-demo',
	templateUrl: './page-demo.component.html',
	styleUrls: ['./page-demo.component.scss'],
})
export class PageDemoComponent implements OnInit {
	@Input() public palette: Palette;

	constructor() {}

	ngOnInit(): void {}

	rgbaColor(color: Color): string {
		return color.rgba;
	}
}
