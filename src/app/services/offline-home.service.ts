import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfflineHomeService {

  link: string = 'http://localhost:57793/';
  img: string = '../../../../assets/images/resources/user-avatar-default.png';
  constructor(private client: HttpClient) { }

  login(credentials: any) {
    return this.client.post(this.link + 'Login', credentials, this.header())
      .pipe(map((res: any) => {
        let response = JSON.parse(res);
        if (response.status === 'SUCCESS=succes') {
          let user = response.userDTO;
          if (user.img === null) user.img = this.img;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('JWT', JSON.stringify(response.jwt));
          window.location.reload();
          return true;
        }
        return false;
      }))
  }

  logout() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('user');
    window.location.reload();
  }

  registration(user: any) {
    return this.client.post(this.link + 'Registration', user, this.header())
      .pipe(map((res: any) => {
        let response = JSON.parse(res);
        if (response.status === 'registration_success') {
          return true;
        }
        return false;
      }))
  }

  getWallPosts() {
    return this.client.get(this.link + 'GetAllPosts', this.header())
      .pipe(map((res: any) => {
        return res;
      }))
  }

  newPeople(): Observable<any[]> {
    return this.client.get(this.link + 'FindNewUsers', this.header())
      .pipe(map((res: any) => {
        return this.parser(res);
      }))
  }

  sendFolower(user: any) {
  }

  header() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return requestOptions;
  }

  parser(res: any) {
    let response: any = [];
    res.forEach((element: any) => {
      if (element.img === null) element.img = this.img;
      response.push(element);
    });
    return response;
  }
}