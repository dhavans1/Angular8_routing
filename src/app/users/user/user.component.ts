import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  userPathChangeSubsciption: Subscription;
  constructor(private activeRoute: ActivatedRoute, private usersSvcIns: UsersService) { }

  ngOnInit() {
    // if ( this.activeRoute.snapshot.params['id'] )
    //   this.user = this.usersSvcIns.getUserbyID(this.activeRoute.snapshot.params['id']);

    this.userPathChangeSubsciption = this.activeRoute.params.subscribe(
      (params) => {
        this.user = this.usersSvcIns.getUserbyID(params.id);
      }
    );
  }

  ngOnDestroy(){
    this.userPathChangeSubsciption.unsubscribe();
  }
}
