import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxRegComponent } from './vax-reg.component';

describe('VaxRegComponent', () => {
  let component: VaxRegComponent;
  let fixture: ComponentFixture<VaxRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaxRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaxRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
