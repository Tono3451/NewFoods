import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInput2Component } from './text-input2.component';

describe('TextInput2Component', () => {
  let component: TextInput2Component;
  let fixture: ComponentFixture<TextInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInput2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
