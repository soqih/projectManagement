import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resource } from 'src/app/resources/resources.component';
import { Task } from 'src/app/tasks/tasks.component';

@Component({
  selector: 'app-total-cost-task',
  templateUrl: './total-cost-task.component.html',
  styleUrls: ['./total-cost-task.component.css']
})
export class TotalCostTaskComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'start', 'finish', "reName", "TotalCost"];
  resources: Map<any, any> = new Map();
  tasks: any[] = [];
  tasksCost: any[] = [];
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Resource>('Resources').valueChanges().subscribe((r) => {
      this.resources = new Map(r.map(i => [i.name, i]));
      firestore.collection<Task>('Tasks').valueChanges().subscribe((t) => {
        this.tasks = t;
        for (var i = 0; i < this.tasks.length; i++) {
          this.tasks[i].cost = 8 * this.tasks[i].duration * this.resources.get(this.tasks[i].reName)?.rate * (this.resources.get(this.tasks[i].reName)?.max / 100)
        }
      })
    })

  }

  ngOnInit(): void {

  }

}
