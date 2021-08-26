import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

@Component({
  selector: 'app-home-online',
  templateUrl: './home-online.component.html',
  styleUrls: ['./home-online.component.css']
})
export class HomeOnlineComponent implements OnInit {

  user: any = null;
  followers: any = null;
  newMedia: any = null;
  newPost: any;
  allPosts: any = [];
  newComment: any;
  messagesCount: any = null;
  notificationsCount: any = null;
  followersCount: any = null;
  followingCount: any = null;
  constructor(private global: Global, private online: OnlineHomeService, private offline: OfflineHomeService) {
    this.newPost = {
      user: null,
      text: null
    }
    this.newComment = {
      user: null,
      text: null,
      post: null
    }
  }

  ngOnInit(): void {
    this.user = this.global.getUserInLocalstorage();
    this.getFollowers();
    this.getUserInformations();
    this.getWallPosts();
  }

  getWallPosts() {
    this.offline.getWallPosts().subscribe((res: any) => {
      this.allPosts = res;
    }, (error: any) => {
      this.allPosts = [];
    })
  }

  makeNewPost() {
    this.newPost.user = this.user
    this.allPosts.push(this.online.saveNewPost(this.newPost))
    this.newPost = {
      user: null,
      text: null
    }
  }

  makeNewComment(post: any) {
    this.newComment.post = post
    this.newComment.user = this.user
    let comment = this.online.saveNewComment(this.newComment);
    this.allPosts.filter((x: any) => {
      if (x.id.toString() == post.id.toString()) {
        x.comments.push(comment)
      }
    })
    this.newComment = {
      user: null,
      text: null,
      post: null
    }
  }

  getUserInformations() {
    let counter = this.online.getUserInformations()
    this.messagesCount = counter.messageCounter
    this.notificationsCount = counter.notificationCounter
    this.followersCount = counter.followersCounter
    this.followingCount = counter.followingCounter
  }

  getFollowers() {
    this.online.getFollowings(this.user.id, 1).subscribe((res: any) => {
      this.followers = res;
    });
  }

  logout() {
    this.offline.logout();
  }
}
