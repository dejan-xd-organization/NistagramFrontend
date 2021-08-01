import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/offline/login/login.component';
import { RegistrationComponent } from './components/offline/registration/registration.component';
import { OfficialHomeComponent } from './components/official-home/official-home.component';
import { NotificationsComponent } from './components/online/notifications/notifications.component';
import { MessagesComponent } from './components/online/messages/messages.component';
import { ViewProfileComponent } from './components/online/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './components/online/profile/edit-profile/edit-profile.component';
import { NewPostComponent } from './components/online/new-post/new-post.component';
import { FollowersComponent } from './components/online/followers/followers.component';
import { ImagesComponent } from './components/online/images/images.component';


const routes: Routes = [
  { path: '', component: OfficialHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'notifications/:id', component: NotificationsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:id', component: MessagesComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'images', component: ImagesComponent },
  { path: ':username', component: ViewProfileComponent },
  { path: ':username/edit', component: EditProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
