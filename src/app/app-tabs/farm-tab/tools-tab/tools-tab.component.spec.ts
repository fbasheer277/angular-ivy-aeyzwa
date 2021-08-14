import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTabComponent } from './tools-tab.component';

describe('ToolsTabComponent', () => {
  let component: ToolsTabComponent;
  let fixture: ComponentFixture<ToolsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
