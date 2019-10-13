import { CanActivate, 
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router,
         CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service' 

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild{

    constructor(private authSvcIns: AuthService, private router: Router) {}

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        return this.authSvcIns.isAuthenticated()
        .then(( isAuthenticated: boolean) => 
                {
                    if( isAuthenticated )
                        return true;
                    else{
                         this.router.navigate(['/']);
                    }
                })
        .catch((err) => { return err });
    }

    canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        return this.authSvcIns.isAuthenticated()
        .then(( isAuthenticated: boolean) => 
                {
                    if( isAuthenticated )
                        return true;
                    else{
                         this.router.navigate(['/']);
                    }
                })
        .catch((err) => { return err });
    }
}