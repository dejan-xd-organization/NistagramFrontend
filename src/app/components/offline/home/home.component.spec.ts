import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let offline: OfflineHomeService;

  beforeEach(async () => {

    let newPeople = [
      {
        id: 1,
        firstName: "Dejan",
        lastName: "Jovanovic",
        username: "dejo",
        img: "../../../../assets/images/resources/user-avatar.jpg"
      },
      {
        id: 2,
        firstName: "Pero",
        lastName: "Perić",
        username: "pero",
        img: "../../../../assets/images/resources/user-avatar.jpg"
      }
    ]

    let newNews = [
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

    let newPeopleObservable = of(newPeople)
    let newNewsObservable = of(newNews)

    let offlineServiceMock = {
      getWallPosts: jasmine.createSpy('getWallPosts')
        .and.returnValue(newNewsObservable),
      newPeople: jasmine.createSpy('newPeople')
        .and.returnValue(newPeopleObservable)
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: OfflineHomeService,
          useValue: offlineServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    offline = TestBed.get(OfflineHomeService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const service: OfflineHomeService = TestBed.get(OfflineHomeService);
    expect(service).toBeTruthy();
  });

  it('should get all wall posts', () => {
    component.getAllOfflienOptions();
    expect(component.allPost.length).toEqual(1);
    expect(component.newPeoples.length).toEqual(2);
  });

  it('should have newPeople function', () => {
    const service: OfflineHomeService = TestBed.get(OfflineHomeService);
    expect(service.newPeople).toBeTruthy();
  });
});
