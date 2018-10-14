import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Schema } from './schema';

@Component({
  selector: 'app-schemas',
  templateUrl: './schemas.component.html',
  styleUrls: ['./schemas.component.css']
})
export class SchemasComponent implements OnInit {
  schemaList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('schemas')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(schema) {
          schema.data()['projectId'].get().then(project => {
            let row = new Schema();
            row.serialize(schema.data(), project.data());
            results.push(row);
          });
        });
        this.schemaList = results;
      });
  }

}
