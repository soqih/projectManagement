import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasksAndResourcesComponent } from './all-tasks-and-resources.component';

describe('AllTasksAndResourcesComponent', () => {
  let component: AllTasksAndResourcesComponent;
  let fixture: ComponentFixture<AllTasksAndResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTasksAndResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksAndResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
