import { Component } from '@angular/core';
import { ROUTES_NAME } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular';
  routesName = ROUTES_NAME
}
