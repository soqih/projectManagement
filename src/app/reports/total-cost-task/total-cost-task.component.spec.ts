import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostTaskComponent } from './total-cost-task.component';

describe('TotalCostTaskComponent', () => {
  let component: TotalCostTaskComponent;
  let fixture: ComponentFixture<TotalCostTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCostTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
