import { Component, OnInit } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstName: any = null;
  lastName: any = null;
  email: any = null;
  username: any = null;
  password: any = null;
  isLoading: boolean = false;
  constructor(private offline: OfflineHomeService, private router: Router) { }

  ngOnInit(): void {
  }

  registration() {
    this.isLoading = true;
    if (this.firstName !== null || this.lastName !== null || this.email !== null || this.username !== null || this.password !== null) {
      let registrationObject = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password
      }

      this.offline.registration(registrationObject).subscribe((res: any) => {
        if (!res) {
          alert("Provided data is not valid. Please fill again.")
          this.isLoading = false;
        }
        else {
          this.router.navigate(['/login'])
        }
      });
    }
    else {
      alert("Input fileds can't be empty.")
      this.isLoading = false;
    }
  }

  cancel() {
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.username = null;
    this.password = null;
  }

}
