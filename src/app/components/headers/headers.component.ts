import { Component, OnInit } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  user: any;
  messages: any = null;
  notifications: any = null;
  constructor(private offline: OfflineHomeService, private global: Global, private online: OnlineHomeService) {
    this.user = localStorage.getItem('user');
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
    if (this.user == null) this.getUser()
    return this.global.isOnlineOffline();
  }

  logout() {
    this.offline.logout();
  }
}
