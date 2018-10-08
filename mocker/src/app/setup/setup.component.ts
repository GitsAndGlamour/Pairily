import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  secretList;
  setupList = [{title: 'mockaroo', icon: 'edit'}, {title: 'google', icon: 'cloud'}, {title: 'database', icon: 'storage'}];
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
        this.secretList = results;
      });
  }


}
