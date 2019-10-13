import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerChildComponent } from './servers/server-child/server-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppRouteModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServersService } from './servers/servers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ServerChildComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [AuthService, AuthGaurd, CanDeactivateGaurd, ServerResolver, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
