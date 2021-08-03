import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OfflineHomeService {

  constructor() { }

  login(credentials: any) {
    let user = {
      id: 1,
      firstName: "Dejan",
      lastName: "Jovanović",
      username: "dejan",
      img: "../../../../assets/images/resources/user-avatar.jpg"
    }
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('JWT', JSON.stringify({ jwt: 'aNo301o1n312o3j01nono1j!!!"=$%(!=40123n1o23012h3 01h031n' }))
    window.location.reload();
    return true;
  }

  logout() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('user');
    window.location.reload();
  }

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
