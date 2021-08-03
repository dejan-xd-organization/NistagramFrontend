import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (!localStorage.getItem('JWT')) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
