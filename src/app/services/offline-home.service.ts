import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineHomeService {

  constructor() { }

  getNews(isOffline: Boolean) {
    return [
      {
        ownerPost: {
          id: 1,
          firstName: "Dejan",
          lastName: "Jovanovic",
          username: "dejo",
          img: "../../../../assets/images/resources/user-avatar.jpg"
        },
        timePublis: "Jul, 31 2021 14:00",
        imagePost: "../../../../assets/images/resources/user-avatar.jpg",
        likes: "2K",
        unlike: "200",
        descriptionPost: "Ovde ide kratak opis ispod slike. Stavljam malo vise teksta da vidimo radi li kako treba.",
        comments: [
          {
            user: {
              id: 1,
              firstName: "Dejan",
              lastName: "Jovanovic",
              username: "dejo",
              img: "../../../../assets/images/resources/user-avatar.jpg"
            },
            timeDateComments: "1 year ago",
            comment: "Ovde ide neki drugi tex"
          },
          {
            user: {
              id: 2,
              firstName: "Donald",
              lastName: "Tramp",
              username: "trampoo",
              img: "../../../../assets/images/resources/user-avatar.jpg"
            },
            timeDateComments: "1 year ago",
            comment: "Ovde ide neki drugi text malo duzi."
          }
        ]
      }
    ]
  }

  newPeople() {
    return [
      {
        id: 1,
        firstName: "Dejan",
        lastName: "Jovanovic",
        username: "dejo",
        img: "../../../../assets/images/resources/user-avatar.jpg"
      },
      {
        id: 2,
        firstName: "Donald",
        lastName: "Tramp",
        username: "trapic",
        img: "../../../../assets/images/resources/user-avatar.jpg"
      },
      {
        id: 3,
        firstName: "Jos",
        lastName: "Neko",
        username: "jooo",
        img: "../../../../assets/images/resources/user-avatar.jpg"
      }
    ]
  }

  sendFolower(user: any) {
  }
}
