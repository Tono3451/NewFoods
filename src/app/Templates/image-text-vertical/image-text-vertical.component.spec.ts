import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextVerticalComponent } from './image-text-vertical.component';

describe('ImageTextVerticalComponent', () => {
  let component: ImageTextVerticalComponent;
  let fixture: ComponentFixture<ImageTextVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
