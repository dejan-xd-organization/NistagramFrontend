import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NistagramFrontend';

  ngOnInit(): void {

  }

  getStatusOnline() {
    let user = localStorage.getItem('user');
    if (user !== null) return true;
    return false;
  }
}
