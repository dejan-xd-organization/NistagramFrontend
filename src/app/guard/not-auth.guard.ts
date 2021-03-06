import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
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
