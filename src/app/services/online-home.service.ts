import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineHomeService {

  allPosts: any = [];
  constructor() {
  }

  getMessage() {
    return [
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

  getNotification() {
    return [
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

  getFollowers() {
    return [
      {
        id: 1,
        firstName: "Novica",
        lastName: "Nikolić",
        username: "nole",
        img: "../../../../assets/images/resources/user-avatar2.jpg"
      }
    ]
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
}
