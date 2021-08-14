import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsTabComponent } from './animals-tab.component';

describe('AnimalsTabComponent', () => {
  let component: AnimalsTabComponent;
  let fixture: ComponentFixture<AnimalsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
