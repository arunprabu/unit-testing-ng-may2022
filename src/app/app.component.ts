import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-testing-ng-may2022';

  appName = "Unit Testing App";

  add(a: number, b: number){
    return a + b;
  }

}

