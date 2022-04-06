import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVaxComponent } from './home-vax.component';

describe('HomeVaxComponent', () => {
  let component: HomeVaxComponent;
  let fixture: ComponentFixture<HomeVaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
