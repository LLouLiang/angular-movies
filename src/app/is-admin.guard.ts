import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// canActivate: can enter the route
// canActivateChild: can enter the specific child route
// CanDeactivate: can leave the route
// Resolve: obtain the data before activate the route
// CanLoad: load specific module synchornized
export class IsAdminGuard implements CanActivate {
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
