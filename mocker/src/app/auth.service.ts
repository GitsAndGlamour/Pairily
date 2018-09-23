import {Injectable, Provider} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import {MdcSnackbar} from "@angular-mdc/web";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private snackbar: MdcSnackbar) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string, callback: Function) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        callback();
      })
      .catch(err => this.handleError(err.message))
  }

  login(email: string, password: string, callback: Function) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        callback();
      })
      .catch(err => this.handleError(err.message))
  }

  google(callback: Function) {
    this.firebaseAuth
      .auth
      .signInWithPopup(new GoogleAuthProvider())
      .then(value => {
        callback();
      })
      .catch(err => this.handleError(err.message))
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(value => {
        console.log(value);
        this.snackbar.show("You have successfully logged out.");
    });
  }

  handleError(message: string) {
    this.snackbar.show('Something went wrong:', message);
    console.log(message);
  }

}
