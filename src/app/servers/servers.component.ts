import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server is not created yet!';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    if(this.serverName) {
      this.serverCreationStatus = `Server was created. It´s name is ${this.serverName}`;
    } else {
      alert('Server name is required');
    }
  }

}
