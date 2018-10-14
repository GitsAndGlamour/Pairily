import {OnInit, Component} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Preference} from "./preference";

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  preferenceList: Preference[] = [];
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('preferences')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(preference) {
          let row = new Preference();
          row.serialize(preference.data());
          results.push(row);
        });
        this.preferenceList = results;
      });
  }
}
