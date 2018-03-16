import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightViewerComponent } from './flight-viewer/flight-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    FooterComponent,
    FlightViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
