import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  
  canActivate() {
      if(!localStorage.getItem('user')) {
          return false;
      }
      return true;
  }
}
