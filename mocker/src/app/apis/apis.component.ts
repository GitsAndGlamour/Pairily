import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Api } from './api';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {

  apiList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('apis')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(api) {
          api.data()['schemaId'].get().then(schema => {
            let row = new Api();
            row.serialize(api.data(), schema.data());
            results.push(row);
          });
        });
        this.apiList = results;
      });
  }
}
