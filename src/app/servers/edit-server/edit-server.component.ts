import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params, CanDeactivate } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  isChanged = false;
  allowEdit: boolean = false;
  ParamsSubs: Subscription;
  queryParamsSubs: Subscription;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.ParamsSubs = this.activeRoute.params.subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(parseInt(params['id']));
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      );

      this.queryParamsSubs = this.activeRoute.queryParams.subscribe(
        (QParams: Params) => {
          this.allowEdit = QParams.allowEdit === 'true' ? true : false;
        }
      );
  }

  onChange(){
    this.isChanged = true;
  }

  onUpdateServer() {
    let updateSuccess = this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    if( updateSuccess) {
      this.isChanged = false;
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
      this.ParamsSubs.unsubscribe();
      this.queryParamsSubs.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.isChanged)
      confirm('Do you want to discard the changes?');
    else
      return true;
      
  }
}
