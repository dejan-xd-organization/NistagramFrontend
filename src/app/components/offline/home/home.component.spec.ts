import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfflineHomeService } from 'src/app/services/offline-home.service';

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

    let offlineServiceMock = {
      getNews: jasmine.createSpy('getNews')
        .and.returnValue(newNews),
      newPeople: jasmine.createSpy('newPeople')
        .and.returnValue(newPeople),
      RegenerateData$: {
        subscribe: jasmine.createSpy('subscribe')
      }
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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
    expect(component).toBeTruthy();
  });

  it('should get all news', () => {
    component.getAllOfflienOptions()
    expect(component.allPost.length).toEqual(1)
    expect(component.newPeoples.length).toEqual(2)

  });
});
