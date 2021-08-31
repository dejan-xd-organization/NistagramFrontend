import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditProfileComponent } from './edit-profile.component';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

describe('EditProfileComponent', () => {
  let component: ViewProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [EditProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeUndefined();
  });
});
