import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotAuthGuard } from './guard/not-auth.guard';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HomeComponent } from './components/offline/home/home.component';
import { HomeOnlineComponent } from './components/online/home-online/home-online.component';
import { LoginComponent } from './components/offline/login/login.component';
import { RegistrationComponent } from './components/offline/registration/registration.component';
import { OfficialHomeComponent } from './components/official-home/official-home.component';
import { NotificationsComponent } from './components/online/notifications/notifications.component';
import { MessagesComponent } from './components/online/messages/messages.component';
import { ViewProfileComponent } from './components/online/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './components/online/profile/edit-profile/edit-profile.component';
import { AllPostComponent } from './components/offline/all-post/all-post.component';
import { ListNewPeopleComponent } from './components/offline/list-new-people/list-new-people.component';
import { NewPostComponent } from './components/online/new-post/new-post.component';
import { FollowersComponent } from './components/online/followers/followers.component';
import { ImagesComponent } from './components/online/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    HomeOnlineComponent,
    LoginComponent,
    RegistrationComponent,
    OfficialHomeComponent,
    NotificationsComponent,
    MessagesComponent,
    ViewProfileComponent,
    EditProfileComponent,
    AllPostComponent,
    ListNewPeopleComponent,
    NewPostComponent,
    FollowersComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuard,
    NotAuthGuard,
    { provide: APP_BASE_HREF, useValue: '' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
