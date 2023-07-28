import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWasteFoodComponent } from './post-waste-food.component';

describe('PostWasteFoodComponent', () => {
  let component: PostWasteFoodComponent;
  let fixture: ComponentFixture<PostWasteFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostWasteFoodComponent]
    });
    fixture = TestBed.createComponent(PostWasteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
