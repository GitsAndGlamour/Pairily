import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Dataset} from './dataset';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  datasetList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('datasets')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(dataset) {
          dataset.data()['projectId'].get().then(project => {
            let row = new Dataset();
            row.serialize(dataset.data(), project.data());
            results.push(row);
          });
        });
        this.datasetList = results;
      });
  }

}
