import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NistagramFrontend';

  ngOnInit(): void {
    let user = {
      id: 1,
      firstName: "Dejan",
      lastName: "Jovanović",
      username: "dejan",
      img: "../../../../assets/images/resources/user-avatar.jpg"
    }

    localStorage.setItem("user", JSON.stringify(user))
  }

  getStatusOnline() {
    let user = localStorage.getItem('user');
    if (user !== null) return true;
    return false;
  }
}
