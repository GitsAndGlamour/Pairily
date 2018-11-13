import {Injectable} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

  constructor(private firebaseFirestore: AngularFirestore) {
  }

  getCollection(collection: string) {

  }

}
