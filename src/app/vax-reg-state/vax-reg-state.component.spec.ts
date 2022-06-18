import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxRegStateComponent } from './vax-reg-state.component';

describe('VaxRegStateComponent', () => {
  let component: VaxRegStateComponent;
  let fixture: ComponentFixture<VaxRegStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaxRegStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaxRegStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
