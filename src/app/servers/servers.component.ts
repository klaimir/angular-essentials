import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server is not created yet!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;
  // For debugging: Example 1
  servers;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = `Server was created. It´s name is ${this.serverName}`;
  }

  // For debugging: Example 2
  onDeleteServer(i: number) {
    const position: number = i+1;
    this.servers.splice(position, 1);
  }

}
