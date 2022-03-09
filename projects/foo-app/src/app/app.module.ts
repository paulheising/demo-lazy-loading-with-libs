import { AlphaModule } from 'foo-lib';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AlphaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
