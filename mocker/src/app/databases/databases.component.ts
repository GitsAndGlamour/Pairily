import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Database } from './database';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {
  databaseList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('databases')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(database) {
          let row = new Database();
          row.serialize(database.data());
          results.push(row);
        });
        this.databaseList = results;
      });
  }
}
