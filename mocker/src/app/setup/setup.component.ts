import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

export interface SetupFeature {
  name: string;
  key: string;
  value: string;
  edit: boolean;
  locateKey: string;
}

const SETUPS_FEATURED: SetupFeature[] = [
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: false, locateKey: 'https://www.mockaroo.com/profile'},
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: true,  locateKey: 'https://www.mockaroo.com/profile'},
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: false, locateKey: 'https://www.mockaroo.com/profile'},
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: false, locateKey: 'https://www.mockaroo.com/profile'},
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: false, locateKey: 'https://www.mockaroo.com/profile'},
  {name: 'Mockaroo', key: 'API Key', value: '30923sd382f', edit: false, locateKey: 'https://www.mockaroo.com/profile'},
];

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  displayedColumns: string[] = ['name', 'key', 'value', 'edit', 'locateKey'];
  dataSource = [];
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('setups')
      .get()
      .then(value => {
        console.log(value);

      });
  }


}
