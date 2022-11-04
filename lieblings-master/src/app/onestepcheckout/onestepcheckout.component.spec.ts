import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnestepcheckoutComponent } from './onestepcheckout.component';

describe('OnestepcheckoutComponent', () => {
  let component: OnestepcheckoutComponent;
  let fixture: ComponentFixture<OnestepcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnestepcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnestepcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
