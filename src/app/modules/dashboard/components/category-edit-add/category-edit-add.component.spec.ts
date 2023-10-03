import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditAddComponent } from './category-edit-add.component';

describe('CategoryEditAddComponent', () => {
  let component: CategoryEditAddComponent;
  let fixture: ComponentFixture<CategoryEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
