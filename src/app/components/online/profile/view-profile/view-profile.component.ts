import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';
import { ActivatedRoute } from '@angular/router';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

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
  userInfo: any = null;
  img: any = null;
  address: any = {};
  constructor(
    private global: Global,
    private online: OnlineHomeService,
    private offline: OfflineHomeService,
    private activatedRoute: ActivatedRoute) {
    this.address = {
      city: null,
      country: null
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.findUserById(res.username)
      // this.idActiveProfile = res.username;
      this.activeTab = 'timeline'
    });

    this.user = this.global.getUserInLocalstorage();
    if (this.user !== null) {
      this.getMyFollowers();
      this.getMyFollowing();
    }
  }

  defaultInfo() {
    if (this.userInfo.dateOfBirth === null) this.userInfo.dateOfBirth = '2000-01-01';
    if (this.userInfo.address === null) {
      this.userInfo.address = {
        city: 'Not provided',
        country: 'Not provided'
      }

    }
  }

  findUserById(username: any) {
    this.offline.findUserById(username).subscribe((res: any) => {
      this.userInfo = JSON.parse(res);
      if (this.userInfo !== null && (this.userInfo.isPublicProfile)) {
        this.address = this.userInfo.address;
        this.defaultInfo();
        if (this.userInfo.relationship === 'yes') this.userInfo.relationship = 'In relationship'
        else this.userInfo.relationship = 'Single'

        if (this.userInfo.sex === 'm') this.userInfo.sex = 'Male'
        else if (this.userInfo.sex === 'f') this.userInfo.sex = 'Female'
        else this.userInfo.sex = null;
      }
      this.getMyWallPosts();
      console.log(this.userInfo)
    })
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
    if (this.userInfo !== null) {
      this.online.getMyWallPosts(this.userInfo.id).subscribe((res: any) => {
        this.allPosts = this.parserPost(res);
      }, (error: any) => {
        this.allPosts = [];
      })
    }
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

  isFollowing() {

    // if (post.user.id.toString() === this.user.id.toString()) return true;
    // if (post.isPublic) {
    //   return true;
    // } else {
    //   if (this.followers.length == 0) return false;
    //   else return (this.followers.filter((x: any) => x.id.toString() === post.user.id.toString()).length > 0)
    // }

    if (this.following.length == 0) return true;
    else return !(this.following.filter((x: any) => x.id.toString() === this.userInfo.id.toString()).length > 0);
  }

  addFollowing() {
    this.online.addFollowing(this.userInfo.id, this.user.id).subscribe((res: any) => {
      this.following.unshift(res);
      alert("User " + this.userInfo.firstName + ' ' + this.userInfo.lastName + ' successfully followed.')
    })
  }

  parserPost(posts: any) {
    let response: any = [];
    posts.forEach((element: any) => {
      if (this.isShow(element)) {
        if (element.imagePost === null) element['img'] = this.img;
        else element['img'] = element.imagePost;
        response.push(element);
      }
    });
    return response;
  }

  isShow(post: any) {
    if (post.user.id.toString() === this.user.id.toString()) return true;
    if (post.isPublic) {
      return true;
    } else {
      if (this.followers.length == 0) return false;
      else return (this.followers.filter((x: any) => x.id.toString() === post.user.id.toString()).length > 0)
    }
  }
}
