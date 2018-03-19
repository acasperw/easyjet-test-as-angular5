import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-detailed-view',
  templateUrl: './flight-detailed-view.component.html',
  styleUrls: ['./flight-detailed-view.component.scss']
})
export class FlightDetailedViewComponent implements OnInit {

  private flight;
  private fD;
  private fA;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFlight();
  }

  getFlight(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.flightsService.getSingleFlight(id).subscribe((flight) => {
      this.flight = flight;
      this.setData(flight);
    });
  }

  setData(flight) {
    this.fD = new Date(flight.localDepartureTime);
    this.fA = new Date(flight.localArrivalTime);
  }

  makeTime = (time: Number) => time == 0 ? "00" : time;

  goBack(): void {
    this.location.back();
  }

}
