import { Component, OnInit } from '@angular/core';

import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.scss']
})
export class FlightViewerComponent implements OnInit {

  flightData: any;
  cheapestFlightsData: {};

  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    this.getFlights();
  }

  sortCheapestFlights(flightData: any): void {
    this.cheapestFlightsData = flightData.sort(function (a, b) {
      if (a.prices.adult.value > b.prices.adult.value) { return 1; }
      if (a.prices.adult.value < b.prices.adult.value) { return -1; }
      return 0;
    }).slice(0, 3);
  }

  getFlights(): void {
    this.flightsService.getFlights().subscribe((flightData) => {
      this.flightData = flightData;
      this.sortCheapestFlights(flightData);
    });
  }

}
