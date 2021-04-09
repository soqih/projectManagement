import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resource } from 'src/app/resources/resources.component';

@Component({
  selector: 'app-all-resources',
  templateUrl: './all-resources.component.html',
  styleUrls: ['./all-resources.component.css']
})
export class AllResourcesComponent implements OnInit {
  resources:Resource[]=[];
  displayedColumns: string[] = ['name', 'type', 'material', 'max', 'rate', 'ovt', 'cost'];
  
  constructor(private firestore: AngularFirestore) {
    firestore.collection<Resource>('Resources').valueChanges().subscribe((resourcesCollection) => {
      this.resources = resourcesCollection;
    })
  }

  ngOnInit(): void {
  }

}
