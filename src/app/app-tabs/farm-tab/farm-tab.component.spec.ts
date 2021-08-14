import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmTabComponent } from './farm-tab.component';

describe('FarmTabComponent', () => {
  let component: FarmTabComponent;
  let fixture: ComponentFixture<FarmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
