import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfficialHomeComponent } from './official-home.component';

describe('OfficialHomeComponent', () => {
  let component: OfficialHomeComponent;
  let fixture: ComponentFixture<OfficialHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficialHomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
