import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumVaxComponent } from './sum-vax.component';

describe('SumVaxComponent', () => {
  let component: SumVaxComponent;
  let fixture: ComponentFixture<SumVaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumVaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumVaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
