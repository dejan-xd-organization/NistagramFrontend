import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListNewPeopleComponent } from './list-new-people.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListNewPeopleComponent', () => {
  let component: ListNewPeopleComponent;
  let fixture: ComponentFixture<ListNewPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ListNewPeopleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
