import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Color } from '@angular-material-components/color-picker';
import { MatSliderChange } from '@angular/material/slider';
import { Palette } from '../color-palette/color-palette.component';

@Component({
	selector: 'cp-color-group',
	templateUrl: './color-group.component.html',
	styleUrls: ['./color-group.component.scss'],
})
export class ColorGroupComponent implements OnInit {
	public color: Color;
	public lightColors: Color[] = [];
	public contrastColors: Color[] = [];
	public colors: Color[] = [];
	public hueColor = 20;
	public saturationColor = 5;
	public luminColor = 5;
	public palette: Palette;

	private COLORS_SIZE = 4;

	constructor(private cd: ChangeDetectorRef) {}

	ngOnInit() {}

	changePalette(palette: Palette) {
		this.palette = palette;
		console.log(palette);
		this.cd.detectChanges();
	}

	colorChange(color: Color) {
		this.color = color;
		this.updateColor(this.color);
		// this.cd.detectChanges();
	}

	hueChange(hue: MatSliderChange) {
		this.hueColor = hue.value;
		this.updateColor(this.color);
		// this.cd.detectChanges();
	}

	saturationChange(sat: MatSliderChange) {
		this.saturationColor = sat.value;
		this.updateColor(this.color);
		// this.cd.detectChanges();
	}

	luminChange(lum: MatSliderChange) {
		this.luminColor = lum.value;
		this.updateColor(this.color);
		// this.cd.detectChanges();
	}

	updateColor(color: Color) {
		this.color = color;
		this.colors = [];
		this.lightColors = [];
		this.contrastColors = [];
		const hsl = this.RGBToHSL(color.r, color.g, color.b);
		for (let i = 0; i < this.COLORS_SIZE; i++) {
			// Bright Color
			const hslN = [
				hsl[0] + (this.COLORS_SIZE - i) * this.hueColor,
				hsl[1] - (this.COLORS_SIZE - i) * this.saturationColor,
				hsl[2] + (this.COLORS_SIZE - i) * this.luminColor,
			];

			const rgb = this.HSLToRGB(hslN[0], hslN[1], hslN[2]);
			this.colors[i] = new Color(rgb[0], rgb[1], rgb[2]);

			// Contrast Color
			const hslC = [
				hsl[0] - (i + 1) * this.hueColor,
				hsl[1] + (i + 1) * this.saturationColor,
				hsl[2] - (i + 1) * this.luminColor,
			];

			const rgbD = this.HSLToRGB(hslC[0], hslC[1], hslC[2]);
			this.colors[this.COLORS_SIZE + i + 1] = new Color(
				rgbD[0],
				rgbD[1],
				rgbD[2]
			);

			let rgbL = this.HSLToRGB(hslN[0], hslN[1] * 0.6, hslN[2] * 1.4);
			this.lightColors[i] = new Color(rgbL[0], rgbL[1], rgbL[2]);

			rgbL = this.HSLToRGB(hslC[0], hslC[1] * 0.6, hslC[2] * 1.4);
			this.lightColors[this.COLORS_SIZE + i + 1] = new Color(
				rgbL[0],
				rgbL[1],
				rgbL[2]
			);

			let rgbC = this.HSLToRGB(hslN[0], hslN[1] * 1.4, hslN[2] * 0.6);
			this.contrastColors[i] = new Color(rgbC[0], rgbC[1], rgbC[2]);

			rgbC = this.HSLToRGB(hslC[0], hslC[1] * 1.4, hslC[2] * 0.6);
			this.contrastColors[this.COLORS_SIZE + i + 1] = new Color(
				rgbC[0],
				rgbC[1],
				rgbC[2]
			);
		}

		this.colors[this.COLORS_SIZE] = color;
		const rgbCL = this.HSLToRGB(hsl[0], hsl[1] * 0.6, hsl[2] * 1.4);
		this.lightColors[this.COLORS_SIZE] = new Color(
			rgbCL[0],
			rgbCL[1],
			rgbCL[2]
		);

		const rgbCC = this.HSLToRGB(hsl[0], hsl[1] * 1.4, hsl[2] * 0.6);
		this.contrastColors[this.COLORS_SIZE] = new Color(
			rgbCC[0],
			rgbCC[1],
			rgbCC[2]
		);
	}

	RGBToHSL(r: number, g: number, b: number): number[] {
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		const cmin = Math.min(r, g, b);
		const cmax = Math.max(r, g, b);
		const delta = cmax - cmin;
		let h = 0;
		let s = 0;
		let l = 0;

		// Calculate hue
		// No difference
		if (delta === 0) {
			h = 0;
		}
		// Red is max
		else if (cmax === r) {
			h = ((g - b) / delta) % 6;
		}
		// Green is max
		else if (cmax === g) {
			h = (b - r) / delta + 2;
		}
		// Blue is max
		else {
			h = (r - g) / delta + 4;
		}

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) {
			h += 360;
		}

		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

		return [h, s, l];
	}

	HSLToRGB(h: number, s: number, l: number): number[] {
		h = Math.abs(h % 360);
		// Must be fractions of 1
		s /= 100;
		l /= 100;

		const c = (1 - Math.abs(2 * l - 1)) * s;
		const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		const m = l - c / 2;
		let r = 0;
		let g = 0;
		let b = 0;

		if (0 <= h && h < 60) {
			r = c;
			g = x;
			b = 0;
		} else if (60 <= h && h < 120) {
			r = x;
			g = c;
			b = 0;
		} else if (120 <= h && h < 180) {
			r = 0;
			g = c;
			b = x;
		} else if (180 <= h && h < 240) {
			r = 0;
			g = x;
			b = c;
		} else if (240 <= h && h < 300) {
			r = x;
			g = 0;
			b = c;
		} else if (300 <= h && h < 360) {
			r = c;
			g = 0;
			b = x;
		}
		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);

		return [r, g, b];
	}
}
