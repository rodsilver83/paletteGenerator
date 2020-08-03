import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorGradientComponent } from './color-gradient/color-gradient.component';

@NgModule({
  declarations: [AppComponent, ColorGradientComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
