import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  sub: Subscription;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params['id'] == undefined )
      this.server = this.serversService.getServer(1);
    else
      this.sub = this.activeRoute.params.subscribe(
        (params) => {
            this.server = this.serversService.getServer(parseInt(params.id));  //Use ParseInt BECAUSE getServer() function does value and type check using === not just value (==)
        }
      );
  }

  ngOnDestroy(){
    if(this.sub)
      this.sub.unsubscribe();
  }
}
