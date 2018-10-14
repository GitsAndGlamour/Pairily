import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Generator } from './generator';

@Component({
  selector: 'app-generators',
  templateUrl: './generators.component.html',
  styleUrls: ['./generators.component.css']
})
export class GeneratorsComponent implements OnInit {
  generators;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('generators')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function (generator) {
          generator.data()['schemaId'].get().then(schema => {
            generator.data()['databaseId'].get().then(database => {
              console.log(schema.data());
              let row = new Generator();
              row.serialize(generator.data(), schema.data(), database.data());
              results.push(row);
            });
          });
        });
        this.generators = results;
      });
  }
}
