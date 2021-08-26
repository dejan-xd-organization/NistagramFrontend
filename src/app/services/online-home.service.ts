import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineHomeService {

  link: string = 'http://localhost:57793/';
  link1: string = 'http://localhost:6709/';
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

  getFollowings(id: any, page: any) {
    return this.client.get(this.link1 + 'GetAllFollowers?id=' + id + '&page=' + page)
      .pipe(map((res: any) => {
        let response = this.parser(res);
        return response;
      }))
  }

  saveNewPost(post: any) {
    post["id"] = this.allPosts.length + 1;
    post["datetime"] = Date.now();
    post["likeCount"] = 10;
    post["dislikeCount"] = 1;
    post["comments"] = []
    post.comments = [
      {
        id: 1,
        user: {
          id: 1,
          firstName: "Novica",
          lastName: "Nikolić",
          username: "nole",
          img: "../../../../assets/images/resources/user-avatar2.jpg"
        },
        dateCreated: Date.now(),
        text: "Neki tekst"
      }
    ]
    return post
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

  parser(res: any) {
    let response: any = [];
    res.forEach((element: any) => {
      if (element.img === null) element.img = this.img;
      response.push(element);
    });
    return response;
  }
}
