import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authSvcIns: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(){
    // Navigate to Servers page
    this.router.navigate(['servers']);
  }

  login(){
    this.authSvcIns.onLogIn();
  }

  logOut(){
    this.authSvcIns.onLogOut();
  }
}
