import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTitleTextHorizontalComponent } from './image-title-text-horizontal.component';

describe('ImageTitleTextHorizontalComponent', () => {
  let component: ImageTitleTextHorizontalComponent;
  let fixture: ComponentFixture<ImageTitleTextHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTitleTextHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTitleTextHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
