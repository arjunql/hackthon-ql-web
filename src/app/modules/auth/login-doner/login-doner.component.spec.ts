import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDonerComponent } from './login-doner.component';

describe('LoginDonerComponent', () => {
  let component: LoginDonerComponent;
  let fixture: ComponentFixture<LoginDonerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDonerComponent]
    });
    fixture = TestBed.createComponent(LoginDonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
