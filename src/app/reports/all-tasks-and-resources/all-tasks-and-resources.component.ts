import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resource } from 'src/app/resources/resources.component';
import { Task } from 'src/app/tasks/tasks.component';

@Component({
  selector: 'app-all-tasks-and-resources',
  templateUrl: './all-tasks-and-resources.component.html',
  styleUrls: ['./all-tasks-and-resources.component.css']
})
export class AllTasksAndResourcesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'start', 'finish', "reName"];
  resources: Resource[] = [];
  tasks: Task[] = [];
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Resource>('Resources').valueChanges().subscribe((r) => {
      this.resources = r;
    })
    firestore.collection<Task>('Tasks').valueChanges().subscribe((t) => {
      this.tasks = t;
    })
  }

  ngOnInit(): void {
  }

}
