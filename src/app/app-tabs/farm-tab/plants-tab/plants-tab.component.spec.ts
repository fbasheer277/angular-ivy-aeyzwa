import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsTabComponent } from './plants-tab.component';

describe('PlantsTabComponent', () => {
  let component: PlantsTabComponent;
  let fixture: ComponentFixture<PlantsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
