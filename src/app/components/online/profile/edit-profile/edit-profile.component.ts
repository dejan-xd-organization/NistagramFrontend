import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global/global';
import { OnlineHomeService } from 'src/app/services/online-home.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  img: string = '../../../../assets/images/resources/user-avatar-default.png';

  user: any = null;
  messagesCount: any = 5;
  notificationsCount: any = null;
  followersCount: any = null;
  followingCount: any = null;
  activeTab: any = 'basic';
  address: any = {};
  oldPassword: any = null;
  confirmPassword: any = null;
  newPassword: any = null;
  isLoading: boolean = false;
  constructor(private global: Global, private online: OnlineHomeService) {
    this.address = {
      city: null,
      country: null
    }
  }

  ngOnInit(): void {
    this.user = this.global.getUserInLocalstorage();
    let split = this.user.dateOfBirth.split('T');
    this.user.dateOfBirth = split[0];
    console.log(this.user)
  }

  getUserInformations() {
    let counter = this.online.getUserInformations()
    this.messagesCount = counter.messageCounter;
    this.notificationsCount = counter.notificationCounter;
    this.followersCount = counter.followersCounter;
    this.followingCount = counter.followingCounter;
  }

  updateProfile() {
    this.isLoading = true;
    this.online.updateUser(this.user).subscribe((res: any) => {
      if (res.status === 'SUCCESS') {
        localStorage.removeItem('user');
        let updateUser = res.updateUserDto;
        updateUser['img'] = updateUser['img'] !== undefined ? updateUser.img : this.img;
        localStorage.setItem('user', JSON.stringify(updateUser));
        this.user = updateUser;
        let split = this.user.dateOfBirth.split('T');
        this.user.dateOfBirth = split[0];
        this.address = updateUser.address;
        this.isLoading = false;
        alert('User ' + this.user.username + ' successfuly updated.')
      }
      else {
        this.isLoading = false;
        alert('Something went wrong. Please try again.')
      }
    })
  }

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.isLoading = true;
      this.online.changePassword(this.user.id, this.oldPassword, this.newPassword).subscribe((res: any) => {
        if (res.status === 'SUCCESS') {
          this.oldPassword = null;
          this.confirmPassword = null;
          this.newPassword = null;
          this.isLoading = false;
          alert('Password succesfully updated.')
          this.activeTab = 'basic';
        }
        else {
          this.isLoading = false;
          alert('Something went wrong. Please try again.')
        }
      })
    }
    else {
      this.isLoading = false;
      alert('Confirm password and new password does not match.')
    }
  }

  cancel() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    let split = this.user.dateOfBirth.split('T');
    this.user.dateOfBirth = split[0];
    this.oldPassword = null;
    this.confirmPassword = null;
    this.newPassword = null;
  }

}
