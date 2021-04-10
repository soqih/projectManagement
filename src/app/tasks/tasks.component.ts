import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

import firebase from 'firebase';
export interface Task {
  name: string;
  id: number;
  duration: number;
  start: number;
  finish: number;
  reName: string;
}
const ELEMENT_DATA: Task[] = [
  { id: 1, name: 'Hydrogen', duration: 1.0079, start: 1, finish: 1, reName: '' },
  { id: 2, name: 'Helium', duration: 4.0026, start: 1, finish: 1, reName: '' },
  { id: 3, name: 'Lithium', duration: 6.941, start: 1, finish: 1, reName: '' },
  { id: 4, name: 'Beryllium', duration: 9.0122, start: 1, finish: 1, reName: '' },
  { id: 5, name: 'Boron', duration: 10.811, start: 1, finish: 1, reName: '' },
  { id: 6, name: 'Carbon', duration: 12.0107, start: 1, finish: 1, reName: '' },
  { id: 7, name: 'Nitrogen', duration: 14.0067, start: 1, finish: 1, reName: '' },
  { id: 8, name: 'Oxygen', duration: 15.9994, start: 1, finish: 1, reName: '' },
  { id: 9, name: 'Fluorine', duration: 18.9984, start: 1, finish: 1, reName: '' },
  { id: 10, name: 'Neon', duration: 20.1797, start: 1, finish: 1, reName: '' },
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'duration', 'start', 'finish', 'delete'];
  dataSource = ELEMENT_DATA;
  tasks: Task[] = [];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Task>('Tasks').valueChanges().subscribe((tasksCollection) => {
      this.tasks = tasksCollection;
    })




  }


  ngOnInit(): void {

  }

  delete(element: Task) {
    this.firestore.collection<Task>('Tasks').doc(element.id.toString()).delete();
  }
  saveTask(id: any, name: any, duration: any, start: any, finish: any) {
    if (!(id && name && duration && start && finish)) {
      alert('ERROR: Some attributes are missing')
      return;
    }

    if (isNaN(duration) /*|| isNaN(start) || isNaN(finish)*/) {
      alert('ERROR: Duration is not a number')
      return;
    }
    var task: Task = { id: id, name: name, duration: Number(duration), start:start, finish:finish, reName: 'not allocated' }
    // this.firestore.collection<Task>('Tasks').add(task)
    this.firestore.collection<Task>('Tasks').doc(id).set(task)
  }
}
