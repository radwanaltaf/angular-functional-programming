import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxStateComponent } from './vax-state.component';

describe('VaxStateComponent', () => {
  let component: VaxStateComponent;
  let fixture: ComponentFixture<VaxStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaxStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
