import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');

    this.router.navigate(['/']);
  }
}
