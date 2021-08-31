import { Component, OnInit } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  user: any;
  messages: any = null;
  notifications: any = null;
  isShow: boolean = false;
  searchText: any = null;
  filterUser: any = [];
  constructor(private offline: OfflineHomeService, private global: Global,
    private online: OnlineHomeService, private router: Router) {
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

  filter() {
    if (this.searchText !== null && this.searchText.length > 2) {
      this.offline.findUser(this.searchText).subscribe((res: any) => {
        this.filterUser = res;
        if (this.filterUser.length > 0) this.isShow = true;
        else this.isShow = false;
      })
    }
    else {
      this.isShow = false;
    }

  }

  openProfile(user: any) {
    this.searchText = null;
    this.isShow = false;
    this.filterUser = [];
    this.router.navigate(['/' + user.id])
  }
}
