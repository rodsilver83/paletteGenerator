import { Component, OnInit, Input } from '@angular/core';
import { Color } from '@angular-material-components/color-picker';

@Component({
	selector: 'cp-color-row',
	templateUrl: './color-row.component.html',
	styleUrls: ['./color-row.component.scss'],
})
export class ColorRowComponent implements OnInit {
	@Input() public colors: Color[];

	constructor() {}

	ngOnInit(): void {}

	bgColor(color: Color): string {
		return color.rgba;
	}
}
