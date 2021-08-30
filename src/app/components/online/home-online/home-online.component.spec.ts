import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeOnlineComponent } from './home-online.component';
import { OnlineHomeService } from 'src/app/services/online-home.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('HomeOnlineComponent', () => {
  let component: HomeOnlineComponent;
  let fixture: ComponentFixture<HomeOnlineComponent>;
  let online: OnlineHomeService;

  beforeEach(async () => {

    let followers = [
      {
        id: 1,
        firstName: "Pero",
        lastName: "Perić",
        username: "pero",
        img: "../../../../assets/images/resources/user-avatar2.jpg"
      },
      {
        id: 2,
        firstName: "Miko",
        lastName: "Mikić",
        username: "miko",
        img: "../../../../assets/images/resources/user-avatar2.jpg"
      }
    ]

    let resPost = {
      status: 'SUCCESS'
    }

    let followingsObservable = of(followers);
    let respostObservable = of(resPost);

    let onlineServiceMock = {
      getNewFollowers: jasmine.createSpy('getNewFollowers')
        .and.returnValue(followingsObservable),
      saveNewPost: jasmine.createSpy('saveNewPost')
        .and.returnValue(respostObservable),
      getFollowings: jasmine.createSpy('getFollowings')
        .and.returnValue(followingsObservable)
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [HomeOnlineComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: OnlineHomeService,
          useValue: onlineServiceMock
        }
      ]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlineComponent);
    online = TestBed.get(OnlineHomeService);
    component = fixture.componentInstance;
    component['user'] = {
      id: 1,
      firstName: "Miko",
      lastName: "Mikić",
      username: "miko",
      img: "../../../../assets/images/resources/user-avatar2.jpg"
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all followers', () => {
    component.getNewFollowers()
    expect(component.followers.length).toEqual(2);
  });

  it('should add new post', () => {
    let post = {
      userId: 1,
      description: null
    }
    component.newPost.userId = 1;
    component.newPost.description = 'Test tekst.'
    component.makeNewPost()
    expect(component.allPosts.length).toEqual(1);
  })

});
