import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksTabComponent } from './snacks-tab.component';

describe('SnacksTabComponent', () => {
  let component: SnacksTabComponent;
  let fixture: ComponentFixture<SnacksTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
