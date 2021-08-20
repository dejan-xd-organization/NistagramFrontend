import { Component, OnInit } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  allPost: any;
  newPeoples: any;
  constructor(private home: OfflineHomeService) {
    this.user = localStorage.getItem('user');
    this.newPeoples = null;
    this.allPost = null;
  }

  ngOnInit(): void {
    this.isOnlineOffline();
    this.getAllOfflienOptions();
  }

  getAllOfflienOptions() {
    this.allPost = this.home.getNews(false);
    this.home.newPeople().subscribe((res: any) => {
      this.newPeoples = res;
    }, (error: any) => {
      this.newPeoples = [];
    });
  }

  onAddComment(event: any) { }

  onSendFollower(event: any) {
    this.home.sendFolower(event);
  }

  isOnlineOffline() {
    if (this.user != undefined) {
      this.user = JSON.parse(this.user);
      return true;
    }
    return false;
  }
}
