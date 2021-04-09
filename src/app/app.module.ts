import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { ResourcesComponent } from './resources/resources.component';
import { AllocationComponent } from './allocation/allocation.component';
import { AllTasksComponent } from './reports/all-tasks/all-tasks.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AllResourcesComponent } from './reports/all-resources/all-resources.component';
import { AllTasksAndResourcesComponent } from './reports/all-tasks-and-resources/all-tasks-and-resources.component';
import { TotalCostTaskComponent } from './reports/total-cost-task/total-cost-task.component';
import { TotalCostProjectComponent } from './reports/total-cost-project/total-cost-project.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ResourcesComponent,
    AllocationComponent,
    AllTasksComponent,
    AllResourcesComponent,
    AllTasksAndResourcesComponent,
    TotalCostTaskComponent,
    TotalCostProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
