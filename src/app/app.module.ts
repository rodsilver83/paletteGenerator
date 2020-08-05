import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from '@angular-material-components/color-picker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorGradientComponent } from './color-gradient/color-gradient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ColorGroupComponent } from './color-group/color-group.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorRowComponent } from './color-row/color-row.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { PageDemoComponent } from './page-demo/page-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorGradientComponent,
    ColorBoxComponent,
    ColorGroupComponent,
    ColorRowComponent,
    ColorPaletteComponent,
    PageDemoComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxMatColorPickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent],
})
export class AppModule {}
