import { Component, OnInit } from '@angular/core';

import { footerItems } from '../mock-data/mock-footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerItems = footerItems;

  ngOnInit() {
  }

}
