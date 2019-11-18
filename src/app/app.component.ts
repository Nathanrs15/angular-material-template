import { Component } from '@angular/core';
import { SignalRService } from '@service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';

  constructor(private signalRService: SignalRService) {
    this.signalRService.startConnection();
    this.signalRService.addMessageListener();
  }
}
