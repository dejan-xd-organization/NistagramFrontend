import { Component, OnInit } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any = null;
  password: any = null;
  isLoading: boolean = false;
  constructor(private offline: OfflineHomeService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    let credentials = {
      username: this.username,
      password: this.password
    };

    this.offline.login(credentials).subscribe((res: any) => {
      if (!res) {
        alert("Invalid credentials. Please log in again.")
        this.isLoading = false;
      }
    });
  }
}
