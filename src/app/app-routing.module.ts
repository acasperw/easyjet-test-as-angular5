import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightViewerComponent } from './flight-viewer/flight-viewer.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  { path: '', component: FlightViewerComponent },
  { path: 'help', component: HelpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
