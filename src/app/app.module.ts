import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerChildComponent } from './servers/server-child/server-child.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserComponent }
    ] },
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent  },
    { path: 'serverchild', component: ServerChildComponent  },
    { path: 'edit/:id', component: EditServerComponent }
    ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ServerChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
