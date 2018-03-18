import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-flight-info',
  templateUrl: './quick-flight-info.component.html',
  styleUrls: ['./quick-flight-info.component.scss']
})
export class QuickFlightInfoComponent implements OnInit {

  @Input() data: {};

  constructor() { }

  ngOnInit() {
  }

}
