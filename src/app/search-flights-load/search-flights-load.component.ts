import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-flights-load',
  templateUrl: './search-flights-load.component.html',
  styleUrls: ['./search-flights-load.component.scss']
})
export class SearchFlightsLoadComponent implements OnInit {

  @Input() data: {};

  constructor() { }

  ngOnInit() {
  }

}