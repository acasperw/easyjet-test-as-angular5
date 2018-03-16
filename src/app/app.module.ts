import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightViewerComponent } from './flight-viewer/flight-viewer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { SearchFlightsLoadComponent } from './search-flights-load/search-flights-load.component';
import { CheapestFlightsComponent } from './cheapest-flights/cheapest-flights.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    FooterComponent,
    FlightViewerComponent,
    HelpPageComponent,
    SearchFlightsLoadComponent,
    CheapestFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
