import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resource } from 'src/app/resources/resources.component';
import { Task } from 'src/app/tasks/tasks.component';

@Component({
  selector: 'app-total-cost-project',
  templateUrl: './total-cost-project.component.html',
  styleUrls: ['./total-cost-project.component.css']
})
export class TotalCostProjectComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'start', 'finish', "reName", "TotalCost"];
  resources: Map<any, any> = new Map();
  tasks: any[] = [];
  tasksCost: any[] = [];
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Resource>('Resources').valueChanges().subscribe((r) => {
      this.resources = new Map(r.map(i => [i.name, i]));
      firestore.collection<Task>('Tasks').valueChanges().subscribe((t) => {
        this.tasks = t;
        var total = 0
        for (var i = 0; i < this.tasks.length; i++) {
          this.tasks[i].cost = 8 * this.tasks[i].duration * this.resources.get(this.tasks[i].reName)?.rate
          total += this.tasks[i].cost ? this.tasks[i].cost : 0
        }
        this.tasks.push({ id: 'Total Cost', cost: total })

      })

      // this.usersCollection = new Map(d.map(i => [i.uid, i]));
    })

  }

  ngOnInit(): void {
  }

}
