import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges,
	Output,
	EventEmitter,
} from '@angular/core';
import { Color } from '@angular-material-components/color-picker';

export interface Palette {
	id: number;
	neutrals: Color[];
	primary: Color;
	secondary: Color;
	accent: Color;
}

@Component({
	selector: 'cp-color-palette',
	templateUrl: './color-palette.component.html',
	styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit, OnChanges {
	@Input() public lightColors: Color[];
	@Input() public colors: Color[];
	@Input() public contrastColors: Color[];

	@Output() public changePalette = new EventEmitter<Palette>();

	private NUM_PALETTES = 21;

	public palettes: Palette[] = [];
	public selectedPalette = 0;

	constructor() {}

	ngOnInit(): void {
		// this.createPalettes();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (
			(changes.lightColors && changes.lightColors.currentValue) ||
			(changes.colors && changes.colors.currentValue) ||
			(changes.contrastColors && changes.contrastColors.currentValue)
		) {
			this.createPalettes();
			this.changePalette.emit(this.palettes[this.selectedPalette]);
		}
	}

	rgbaColor(color: Color): string {
		return color.rgba;
	}

	createPalettes() {
		for (let i = 0; i < this.NUM_PALETTES; i++) {
			this.palettes[i] = {
				id: i,
				neutrals: this.createRandomNeutrals(),
				primary: this.createRandomPrimary(),
				secondary: this.createRandomSecondary(),
				accent: this.createRandomAccent(),
			};
		}
	}

	createRandomNeutrals(): Color[] {
		const neutrals: Color[] = [];
		const lightIndex = Math.floor(Math.random() * 3);
		const darkIndex =
			this.contrastColors.length - 1 - Math.floor(Math.random() * 3);
		neutrals.push(this.lightColors[lightIndex]);
		neutrals.push(this.contrastColors[darkIndex]);
		return neutrals;
	}

	createRandomPrimary(): Color {
		const randIndex = 3 + Math.floor(Math.random() * 3);
		return this.colors[randIndex];
	}

	createRandomSecondary(): Color {
		const randIndex =
			this.lightColors.length - 1 - Math.floor(Math.random() * 3);
		return this.lightColors[randIndex];
	}

	createRandomAccent(): Color {
		const randIndex = Math.floor(Math.random() * 3);
		return this.contrastColors[randIndex];
	}

	selectPalette(palette: Palette) {
		this.selectedPalette = palette.id;
		this.changePalette.emit(palette);
	}
}
