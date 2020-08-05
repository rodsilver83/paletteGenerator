import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Color } from '@angular-material-components/color-picker';

@Component({
	selector: 'cp-color-gradient',
	templateUrl: './color-gradient.component.html',
	styleUrls: ['./color-gradient.component.scss'],
})
export class ColorGradientComponent implements OnInit {
	@Output() public colorChange = new EventEmitter<Color>();

	private color: Color = new Color(44, 129, 180, 1);

	public theme: ThemePalette = 'primary';
	public colorCtr: AbstractControl = new FormControl(this.color);

	constructor() {}

	ngOnInit() {
		this.colorCtr.valueChanges.subscribe((color: Color) => {
			this.colorChange.emit(color);
		});
		this.colorChange.emit(this.color);
	}
}
