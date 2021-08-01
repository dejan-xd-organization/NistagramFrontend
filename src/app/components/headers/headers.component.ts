import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  user: any;
  messages: any;
  notifications: any;
  constructor(private auth: AuthenticateService, private global: Global, private online: OnlineHomeService) {
    this.user = localStorage.getItem('user');
    this.messages = null;
    this.notifications = null;
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.user = this.global.getUserInLocalstorage();
    if (this.user != null) this.getUserOptions();
  }

  getUserOptions() {
    this.messages = this.online.getMessage();
    this.notifications = this.online.getNotification();
  }

  isOnlineOffline() {
    return this.global.isOnlineOffline();
  }

  logout() {
    this.auth.logout();
  }
}
