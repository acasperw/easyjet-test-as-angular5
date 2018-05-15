import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FlightsService {

  constructor(private http: HttpClient) { }

  private flightsURL = 'http://ejtestbed.herokuapp.com/flights';  // URL to web api

  /** GET heroes from the server */
  getFlights(): Observable<any> {
    return this.http.get(this.flightsURL);
  }

  getSingleFlight(id: String): Observable<any> {
    const url = `${this.flightsURL}/${id}`;
    return this.http.get<any>(url);
  }

}
