import { Component, OnInit } from '@angular/core';

import { menuItems } from '../mock-data/mock-menu';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  constructor() { }

  expanded;
  menuItems = menuItems;

  ngOnInit() {
    this.expanded = true;
  }

  handleClick(): void {
    this.expanded = this.expanded ? false : true;
  }

}
