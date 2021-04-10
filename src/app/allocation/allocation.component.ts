import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resource } from '../resources/resources.component';
import { Task } from '../tasks/tasks.component';

const ELEMENT_DATA: Task[] = [
  { id: 1, name: 'Hydrogen', duration: 1.0079, start: 1, finish: 1, reName: 'resource' },
  { id: 2, name: 'Helium', duration: 4.0026, start: 1, finish: 1, reName: 'resource' },
  { id: 3, name: 'Lithium', duration: 6.941, start: 1, finish: 1, reName: 'resource' },
  { id: 4, name: 'Beryllium', duration: 9.0122, start: 1, finish: 1, reName: 'resource' },
  { id: 5, name: 'Boron', duration: 10.811, start: 1, finish: 1, reName: 'resource' },
  { id: 6, name: 'Carbon', duration: 12.0107, start: 1, finish: 1, reName: 'resource' },
  { id: 7, name: 'Nitrogen', duration: 14.0067, start: 1, finish: 1, reName: 'resource' },
  { id: 8, name: 'Oxygen', duration: 15.9994, start: 1, finish: 1, reName: 'resource' },
  { id: 9, name: 'Fluorine', duration: 18.9984, start: 1, finish: 1, reName: 'resource' },
  { id: 10, name: 'Neon', duration: 20.1797, start: 1, finish: 1, reName: 'resource' },
];

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'duration', 'start', 'finish', "reName"];
  dataSource = ELEMENT_DATA;
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

  allocate(taskID: any, resourceName: any) {
    if (this.resources.every((r) => r.name != resourceName)) {
      alert('ERROR: Resource is not found')
      return;
    }
    if(this.tasks.every((t) => t.id != taskID)) {
      alert('ERROR: Task is not found')
      return;
    }
    this.firestore.collection<Task>('Tasks').doc(taskID).update({ reName: resourceName })
  }
}
