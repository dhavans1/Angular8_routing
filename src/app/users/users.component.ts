import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit{
  users: {id: number, name: string}[];
  constructor(private usersSvcIns: UsersService, private activeRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.users = this.usersSvcIns.getAllUsers();
  }

  onUserSelect(id){
    this.router.navigate(['/users', id]);
  }
}
