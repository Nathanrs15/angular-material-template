import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import * as signalR from '@aspnet/signalr';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private baseUrl = environment.baseUrl;

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.baseUrl + 'hub/notify')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Client started'))
      .catch(err => {
        console.log('SignalR Client: Error while starting connection: ' + err);
        setTimeout(() => this.startConnection(), 5000);
      });
  }

  public addMessageListener = () => {
    this.hubConnection.on('succes', (response) => {
      console.log('succes', response);
      this.toastr.success(response, '', { disableTimeOut: true, progressBar: false });
    });

    this.hubConnection.on('info', (response) => {
      console.log('info', response);
      this.toastr.info(response, '', { disableTimeOut: true, progressBar: false });
    });

    this.hubConnection.on('warn', (response) => {
      console.log('warn', response);
      this.toastr.warning(response, '', { disableTimeOut: true, progressBar: false });
    });

    this.hubConnection.on('error', (response) => {
      console.log('error', response);
      this.toastr.error(response, '', { disableTimeOut: true, progressBar: false });
    });

    this.hubConnection.onclose(() => {
      this.startConnection();
    });
  }

  public closeConnection = () => {
    this.hubConnection.stop();
  }

  constructor(private toastr: ToastrService) { }
}
