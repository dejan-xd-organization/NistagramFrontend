import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-home',
  templateUrl: './official-home.component.html',
  styleUrls: ['./official-home.component.css']
})
export class OfficialHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOfflineOnline() {
    if (localStorage.getItem('user')) return true;
    return false;
  }

}
