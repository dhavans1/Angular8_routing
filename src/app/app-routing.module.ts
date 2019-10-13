import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServerChildComponent } from "./servers/server-child/server-child.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from "./can-deactivate-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'users', canActivate: [AuthGaurd], component: UsersComponent, children: [
      { path: ':id', component: UserComponent }
      ] },
    { path: 'servers', canActivateChild: [AuthGaurd] , component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: 'serverchild', component: ServerChildComponent  },
      { path: 'edit/:id', component: EditServerComponent, canDeactivate: [CanDeactivateGaurd] }
      ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'error', component: ErrorPageComponent, data: { message: 'Page not found!' }},
    { path: '**', redirectTo: '/error' }
  ];

@NgModule({
 imports: [
     RouterModule.forRoot(appRoutes)
    ],
 exports: [RouterModule]
})

export class AppRouteModule{

}