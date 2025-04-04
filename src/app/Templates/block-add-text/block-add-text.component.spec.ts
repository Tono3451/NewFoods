import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAddTextComponent } from './block-add-text.component';

describe('BlockAddTextComponent', () => {
  let component: BlockAddTextComponent;
  let fixture: ComponentFixture<BlockAddTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockAddTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockAddTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
