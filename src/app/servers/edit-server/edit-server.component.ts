import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  subscription: Subscription;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if ( this.activeRoute.snapshot.params['id'] == undefined ){
      this.server = this.serversService.getServer(1);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
    else{
      this.subscription = this.activeRoute.params.subscribe(
        (params) => {
          this.server = this.serversService.getServer(parseInt(params['id']));
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      )
    }
  }

  onUpdateServer() {
    let updateSuccess = this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    if( updateSuccess) {
      this.router.navigate(['/servers', this.server.id]); 
  }
    else
      this.onUpdateFail();
  }

  onUpdateFail(){
    //code to handle update failure
    alert("Update failed");
  }

  ngOnDestroy(){
    if ( this.subscription )
      this.subscription.unsubscribe();
  }
}
