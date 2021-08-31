import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineHomeService {

  link: string = 'http://localhost:57793/';
  //link1: string = 'http://localhost:6709/';
  img: string = '../../../../assets/images/resources/user-avatar-default.png';

  allPosts: any = [];
  testList: any = [];
  constructor(private client: HttpClient) {
    this.testList = [
      {
        id: 1,
        user: {
          id: 1,
          firstName: "Dejan",
          lastName: "Jovanović",
          username: "dejan",
          img: "../../../../assets/images/resources/user-avatar.jpg"
        },
        text: "Pozdrav",
        datetime: "1 min ago"
      }
    ];
  }

  getMessage() {
    return this.testList;
  }

  getNotification() {
    return this.testList;
  }

  getNewFollowers(id: any) {
    return this.client.get(this.link + 'GetNewFollowers?id=' + id)
      .pipe(map((res: any) => {
        let response = this.parser(res);
        return response;
      }))
  }

  getNewFollowings(id: any) {
    return this.client.get(this.link + 'GetNewFollowings?id=' + id)
      .pipe(map((res: any) => {
        let response = this.parser(res);
        return response;
      }))
  }

  getMyFollowers(id: any, page: any) {
    return this.client.get(this.link + 'GetMyFollowers?id=' + id + '&page=' + page)
  }

  getMyFollowing(id: any, page: any) {
    return this.client.get(this.link + 'getMyFollowing?id=' + id + '&page=' + page)
  }

  saveNewPost(post: any) {
    return this.client.post(this.link + 'NewPost', post)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getWallPosts() {
    return this.client.get(this.link + 'GetAllOnlineWallPosts')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getMyWallPosts(id: any) {
    return this.client.get(this.link + 'GetMyOnlineWallPosts?id=' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  like(id: any, userId: any) {
    return this.client.put(this.link + 'Like', { id: id, userId: userId });
  }

  dislike(id: any, userId: any) {
    return this.client.put(this.link + 'Dislike', { id: id, userId: userId });
  }

  saveNewComment(data: any) {
    data["id"] = Math.random()
    data["dateCreated"] = Date.now()
    return data
  }

  getUserInformations() {
    return {
      messageCounter: 5,
      notificationCounter: 1,
      followersCounter: 100,
      followingCounter: 50
    }
  }

  updateUser(user: any) {
    return this.client.put(this.link + 'UpdateUser', user);
  }

  changePassword(id: any, oldPassword: any, newPassword: any) {
    return this.client.put(this.link + 'ChangePassword', { id: id, oldPassword: oldPassword, newPassword: newPassword });
  }

  getChatByUser(friendId: any, userId: any) {
    return this.client.get(this.link + 'GetChatByUser?friendId=' + friendId + '&userId=' + userId);
  }

  sendMessage(text: any, userId: any, friendId: any) {
    return this.client.post(this.link + 'SendMessage', { text: text, userId: userId, friendId: friendId })
  }

  parser(res: any) {
    let response: any = [];
    res.forEach((element: any) => {
      if (element.img === null) element.img = this.img;
      response.push(element);
    });
    return response;
  }

  parserImagePost(res: any) {
    let response: any = [];
    res.forEach((element: any) => {
      if (element.imagePost === null) element['img'] = this.img;
      else element['img'] = element.imagePost;

      element.user = this.parserUser(element.user);

      response.push(element);
    });
    return response;
  }

  parserUser(user: any) {
    if (user.img === null) user.img = this.img;
    return user;
  }

  reloadPage() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

  }

}
