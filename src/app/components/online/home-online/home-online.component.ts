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
      userId: null,
      description: null
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
    this.online.getWallPosts().subscribe((res: any) => {
      this.allPosts = res;
      console.log(this.allPosts);
    }, (error: any) => {
      this.allPosts = [];
    })
  }

  setImage(item: any) {
    return item == null ? '../../../../assets/images/resources/user-avatar-default.png' : item;
  }

  like(item: any) {
    this.online.like(item.id, this.user.id).subscribe((res: any) => {
      if (res) {
        item.like += 1;
      }
    })
  }

  dislike(item: any) {
    this.online.dislike(item.id, this.user.id).subscribe((res: any) => {
      if (res) {
        item.dislike += 1;
      }
    })
  }

  makeNewPost() {
    this.newPost.userId = this.user.id
    this.online.saveNewPost(this.newPost).subscribe((res: any) => {
      res['user'] = this.user
      res['like'] = 0;
      res['dislike'] = 0;
      this.allPosts.unshift(res)
      this.newPost = {
        userId: null,
        description: null
      }
    })


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
