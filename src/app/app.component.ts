import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectManagement';
  inReports1: boolean = false;

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    if (tabChangeEvent.index == 1) {
      this.inReports1 = true;
    }
    else
      this.inReports1 = false;

    // console.log('index => ', tabChangeEvent.index, this.inReports);
  }
}
