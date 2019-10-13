import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    
    resolve( activeRouteSnap: ActivatedRouteSnapshot, stateSnap: RouterStateSnapshot ): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+activeRouteSnap.params['id']);
    }
}