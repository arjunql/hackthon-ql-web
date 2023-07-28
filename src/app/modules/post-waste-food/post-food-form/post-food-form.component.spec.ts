import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFoodFormComponent } from './post-food-form.component';

describe('PostFoodFormComponent', () => {
  let component: PostFoodFormComponent;
  let fixture: ComponentFixture<PostFoodFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostFoodFormComponent]
    });
    fixture = TestBed.createComponent(PostFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
