import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostProjectComponent } from './total-cost-project.component';

describe('TotalCostProjectComponent', () => {
  let component: TotalCostProjectComponent;
  let fixture: ComponentFixture<TotalCostProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCostProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCostProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
