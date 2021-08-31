import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  user: any = null;
  messagesCount: any = null;
  notificationsCount: any = null;
  followersCount: any = null;
  followingCount: any = null;
  followers: any = null;
  following: any = null;
  friends: any = [];
  userChat: any = null;
  isOpenChat: boolean = false;
  allChatBox: any = [];
  chatFriend: any = null;
  newText: any = null;
  constructor(private global: Global, private online: OnlineHomeService, private offline: OfflineHomeService) { }

  ngOnInit(): void {
    this.online.reloadPage();
    this.user = this.global.getUserInLocalstorage();
    this.getNewFollowers();
    this.getNewFollowings();
    this.getUserInformations();
    this.getMyFollowers();
    this.getMyFollowing();
  }

  getUserInformations() {
    let counter = this.online.getUserInformations()
    this.messagesCount = counter.messageCounter
    this.notificationsCount = counter.notificationCounter
    this.followersCount = counter.followersCounter
    this.followingCount = counter.followingCounter
  }

  getNewFollowers() {
    this.online.getNewFollowers(this.user.id).subscribe((res: any) => {
      this.followers = res;
    });
  }

  getNewFollowings() {
    this.online.getNewFollowings(this.user.id).subscribe((res: any) => {
      this.following = res;
    });
  }

  getMyFollowers() {
    this.online.getMyFollowers(this.user.id, 1).subscribe((res: any) => {
      this.friends = res;
      this.friends.forEach((element: any) => {
        element.img = this.setImage(element.img)
      });
    })
  }

  getMyFollowing() {
    this.online.getMyFollowing(this.user.id, 1).subscribe((res: any) => {
      let following = res
      following.forEach((element: any) => {
        element.img = this.setImage(element.img)
      });
      // this.friends = [...this.friends, ...following]
      var ids = new Set(this.friends.map((x: any) => x.id));
      this.friends = [...this.friends, ...following.filter((x: any) => !ids.has(x.id))];
    })
  }

  openChat(friend: any) {
    this.chatFriend = friend;
    this.isOpenChat = true;
    this.online.getChatByUser(friend.id, this.user.id).subscribe((res: any) => {
      this.allChatBox = res;
      console.log(res);
    })
  }

  sendMessage() {
    this.online.sendMessage(this.newText, this.user.id, this.chatFriend.id).subscribe((res: any) => {
      if (this.allChatBox !== null) this.allChatBox.push(res)
      else {
        this.allChatBox = []
        this.allChatBox.push(res)
      }
      this.newText = null;
    })
  }

  setImage(item: any) {
    return item == null ? '../../../../assets/images/resources/user-avatar-default.png' : item;
  }

  logout() {
    this.offline.logout();
  }

}
