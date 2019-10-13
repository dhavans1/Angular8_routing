import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";

export interface CanDeactivateComponent{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanDeactivateComponent>{
    canDeactivate( component: CanDeactivateComponent,
                   activeRouteSnap: ActivatedRouteSnapshot, 
                   currState: RouterStateSnapshot, 
                   nextState?: RouterStateSnapshot )
                   : Observable<boolean> | Promise<boolean> | boolean
     {
        return component.canDeactivate();

    }
}