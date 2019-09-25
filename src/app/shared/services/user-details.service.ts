import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user: User = JSON.parse(localStorage.getItem('user'));
  haveUserDetailsCheck: boolean = null;
  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afs.firestore
      .doc('userDetails/' + this.user.uid)
      .onSnapshot(docSnapshot => {
        if (docSnapshot.exists) {
          this.haveUserDetailsCheck = true;
        } else {
          this.haveUserDetailsCheck = false;
        }
      });
  }

  get haveUserDetails(): boolean {
    return this.haveUserDetailsCheck;
  }
}
