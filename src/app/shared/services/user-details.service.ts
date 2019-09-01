import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { UserDetails } from '../models/user-details';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  user: User = JSON.parse(localStorage.getItem('user'));
  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) { }

  getUserDetails() {
    return this.afs.collection('userDetails', ref => ref.where('assignedTo', '==', this.user.uid)).get()[0];
  }

  get haveUserDetails(): boolean {
    const userDetails = this.afs.collection('userDetails', ref => ref.where('assignedTo', '==', this.user.uid)).get();
    return (userDetails !== null) ? true : false;
  }
}
