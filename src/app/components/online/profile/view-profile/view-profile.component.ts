import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user: any = null;
  messagesCount: any = 5;
  notificationsCount: any = null;
  followersCount: any = null;
  followingCount: any = null;
  followers: any = [];
  following: any = [];
  activeTab: any = 'timeline'
  activePane: any = 'followers'
  allPosts: any = [];
  idActiveProfile: any = null;
  img: any = null;
  constructor(private global: Global, private online: OnlineHomeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.idActiveProfile = res.username;
      this.img = res.img;
    });
    this.user = this.global.getUserInLocalstorage();
    if (this.user !== null) {
      this.online.reloadPage();
      this.getMyWallPosts();
      this.getMyFollowers();
      this.getMyFollowing();
    }
  }

  getUserInformations() {
    let counter = this.online.getUserInformations()
    this.messagesCount = counter.messageCounter
    this.notificationsCount = counter.notificationCounter
    this.followersCount = counter.followersCounter
    this.followingCount = counter.followingCounter
  }

  setImage(item: any) {
    return item == null ? '../../../../assets/images/resources/user-avatar-default.png' : item;
  }

  getMyWallPosts() {
    this.online.getMyWallPosts(this.idActiveProfile).subscribe((res: any) => {
      this.allPosts = res;
    }, (error: any) => {
      this.allPosts = [];
    })
  }

  getMyFollowers() {
    this.online.getMyFollowers(this.user.id, 1).subscribe((res: any) => {
      this.followers = res;
      this.followers.forEach((element: any) => {
        element.img = this.setImage(element.img)
      });
    }, (error: any) => {
      this.followers = [];
    })
  }

  getMyFollowing() {
    this.online.getMyFollowing(this.user.id, 1).subscribe((res: any) => {
      this.following = res;
      this.following.forEach((element: any) => {
        element.img = this.setImage(element.img)
      });
    }, (error: any) => {
      this.following = [];
    })
  }

}
