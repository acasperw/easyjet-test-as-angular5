import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-flights-load',
  templateUrl: './search-flights-load.component.html',
  styleUrls: ['./search-flights-load.component.scss']
})
export class SearchFlightsLoadComponent implements OnInit {

  @Input() data: any;

  private flightDeparts: any;
  private flightArrivals: any;

  private searchExpanded: Boolean;
  private submitText: String;
  private FlightSearchData: {
    flightDepart: any;
    flightArriv: any;
    adults: Number;
    kids: Number;
    flightDateOut: String;
    flightDateReturn: String;
  };
  private flightResultsData;

  private submitted = false;

  constructor() {
    this.submitText = 'Lets Go';
    this.searchExpanded = false;
    this.FlightSearchData = {
      flightDepart: '',
      flightArriv: '',
      adults: 2,
      kids: 0,
      flightDateOut: '2016-06-30',
      flightDateReturn: '2016-07-01'
    }
  }

  ngOnInit() {
    this.flightDeparts = this.removeDups(this.data, 'departureAirport');
    this.flightArrivals = this.removeDups(this.data, 'arrivalAirport');
  }

  onSubmit(): void {
    this.submitted = true;
    this.searchExpanded = true;
    this.submitText = 'Refine';
    this.flightResultsData = this.filterFlights(this.FlightSearchData);
  }

  private filterFlights = (FlightSearchData) => {
    return this.data.filter(function (element, index) {
      // Set up dates
      let fDs = new Date(FlightSearchData.flightDateOut).toLocaleDateString();
      let fDd = new Date(element.localDepartureTime).toLocaleDateString();
      // calc total number of passengers
      let numPassengers = (parseInt(FlightSearchData.adults) + parseInt(FlightSearchData.kids));
      // If matches
      return (fDs === fDd && numPassengers <= element.seatsAvailable) ? true : false;
    });
  }

  // Return Unique Values
  private removeDups = (arr, prop) => {
    let tempData = [], uniquesData = [], index;
    for (let i = 0; i < arr.length; i++) {
      index = tempData.indexOf(arr[i][prop]);
      if (index == -1) {
        tempData.push(arr[i][prop]);
        uniquesData.push(arr[i]);
      }
    }
    return uniquesData;
  }

}
