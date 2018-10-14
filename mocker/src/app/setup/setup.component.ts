import {AfterViewInit, Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Secret, Setup } from './setup';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements AfterViewInit {
  setup: Setup = new Setup(null, null, []);
  setupList: Setup[] = [new Setup('mockaroo', 'edit', []), new Setup('google', 'cloud', []), new Setup('database', 'storage', [])];
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngAfterViewInit() {
    this.firebaseFirestore.firestore
      .collection('setups')
      .get()
      .then(querySnapshot => {
        let results: Secret[] = [];
        querySnapshot.forEach(function(secret) {
          let row = new Secret();
          row.serialize(secret.data());
          results.push(row);
        });
        results.forEach((result: Secret) => {
          this.setupList.forEach((setup: Setup) => {
            if (result.name.toLowerCase() === setup.title.toLowerCase()) {
              setup.list.push(result);
            }
          })
        });
      });
  }

  public selectSetup(title) {
    this.setupList.forEach((setup: Setup) => {
      if (setup.title === title) {
        this.setup = setup;
      }
    })
  }


}
