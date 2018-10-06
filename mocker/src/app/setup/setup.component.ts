import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

export interface SetupFeature {
  name: string;
  key: string;
  value: string;
  edit: boolean;
  locateKey: string;
}

let SETUPS_FEATURED: SetupFeature[] = [];

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'key', 'value', 'edit', 'locateKey'];
  dataSource;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('setups')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(doc) {
          let data = doc.data();
          let row = {
            name: data['name'],
            key: data['key'],
            value: data['value'],
            edit: data['edit'],
            locateKey: data['locateKey']
          };
          results.push(row);
        });
        this.dataSource = results;
      });
  }


}
