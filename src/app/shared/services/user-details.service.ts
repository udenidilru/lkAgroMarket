import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user: User = JSON.parse(localStorage.getItem('user'));
  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {}

  haveUserDetails() {
    this.afs.firestore.doc('userDetails/' + this.user.uid).get().then(docSnapshot => {
      if (docSnapshot.exists) {
        return true;
      } else {
        return false;
      }
    });
  }
}
