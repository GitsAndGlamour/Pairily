import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Scenario } from './scenario';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css']
})
export class ScenariosComponent implements OnInit {
  scenarioList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('scenarios')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(scenario) {
          scenario.data()['projectId'].get().then(project => {
            let row = new Scenario();
            row.serialize(scenario.data(), project.data());
            results.push(row);
          });
        });
        this.scenarioList = results;
      });
  }

}
