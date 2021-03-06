import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightViewerComponent } from './flight-viewer/flight-viewer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { SearchFlightsLoadComponent } from './search-flights-load/search-flights-load.component';
import { FlightsService } from './flights.service';
import { QuickFlightInfoComponent } from './quick-flight-info/quick-flight-info.component';
import { FlightDetailedViewComponent } from './flight-detailed-view/flight-detailed-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    FooterComponent,
    FlightViewerComponent,
    HelpPageComponent,
    SearchFlightsLoadComponent,
    QuickFlightInfoComponent,
    FlightDetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
