import { AlphaModule } from 'foo-lib';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Remove this line and the usage in app.component.html to see lib
    // references moving to lazy bundle. Add it again and all lib references go
    // to main bundle (don't forget to add/remove the import above)
    AlphaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
