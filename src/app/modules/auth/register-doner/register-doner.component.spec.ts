import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDonerComponent } from './register-doner.component';

describe('RegisterDonerComponent', () => {
  let component: RegisterDonerComponent;
  let fixture: ComponentFixture<RegisterDonerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDonerComponent]
    });
    fixture = TestBed.createComponent(RegisterDonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
