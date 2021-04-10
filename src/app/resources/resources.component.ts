import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
export interface Resource {
  id: string,
  name: string;
  type: number;
  material: any;
  max: any;
  rate: any;
  ovt: any;
  cost: number
}

const ELEMENT_DATA: Resource[] = [
  // { type: 1, name: 'Hydrogen', material: 1.0079, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 2, name: 'Helium', material: 4.0026, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 3, name: 'Lithium', material: 6.941, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 4, name: 'Beryllium', material: 9.0122, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 5, name: 'Boron', material: 10.811, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 6, name: 'Carbon', material: 12.0107, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 7, name: 'Nitrogen', material: 14.0067, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 8, name: 'Oxygen', material: 15.9994, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 9, name: 'Fluorine', material: 18.9984, max: 1, rate: 1, ovt: 1, cost: 2 },
  // { type: 10, name: 'Neon', material: 20.1797, max: 1, rate: 1, ovt: 1, cost: 2 },
];

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'material', 'max', 'rate', 'ovt', 'cost', 'delete'];
  dataSource = ELEMENT_DATA;
  resources: Resource[] = [];
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Resource>('Resources').valueChanges().subscribe((resourcesCollection) => {
      this.resources = resourcesCollection;
    })
  }

  ngOnInit(): void {
  }

  delete(element: Resource) {
    this.firestore.collection<Resource>('Resources').doc(element.id).delete();
  }

  saveResource(name: string, type: any, material: any, max: any, rate: any, ovt: any, cost: any) {
    if (!(name && type&& max && rate /*optional* && ovt && material  && cost*/)) {
      alert('ERROR: Some attributes are missing')
      return;
    }
    if (isNaN(max)) {
      alert('ERROR: Max is not a number')
      return;
    }
    if (isNaN(rate)) {
      alert('ERROR: Rate is not a number')
      return;
    }
    if (isNaN(ovt)) {
      alert('ERROR: Ovt is not a number')
      return;
    }
    if (isNaN(cost)) {
      alert('ERROR: Cost is not a number')
      return;
    }

    var resource: Resource = {
      id: '',
      name: name,
      type: type,
      material: material,
      max: Number(max),
      rate: Number(rate),
      ovt: Number(ovt),
      cost: Number(cost)
    }
    // this.firestore.collection<Task>('Tasks').add(task)
    this.firestore.collection<Resource>('Resources').add(resource).then((doc) => {
      doc.update({id:doc.id})
     })
  }
}
