import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { User } from '../shared/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) { }

  selectedUserType = 'farmer';
  nic = '';
  contact = '';
  district = '';
  homeAddress = '';
  businessAddress = '';
  organization = '';
  designation = '';
  organizationAddress = '';

  ngOnInit() {
    window.document.body.style.backgroundImage = 'url("../../assets/login-background.jpg")';
    window.document.body.style.backgroundPosition = 'center center';
    window.document.body.style.backgroundSize = 'cover';
    window.document.body.style.backgroundRepeat = 'fixed';
    window.document.body.style.backgroundAttachment = 'fixed';
    const layouts = Array.from(window.document.getElementsByClassName('layout'));
    for (const layout of layouts) {
      const slide = layout as HTMLElement;
      slide.style.background = 'transparent';
      slide.style.minHeight = '20em';
    }
  }

  show() {
    console.log(this.selectedUserType);
  }

  submit() {
    let userDetails;
    if (this.selectedUserType === 'farmer') {
      userDetails = {
        selectedUserType: this.selectedUserType,
        nic: this.nic,
        contact: this.contact,
        district: this.district,
        homeAddress: this.homeAddress,
      };
    } else if (this.selectedUserType === 'buyer') {
      userDetails = {
        selectedUserType: this.selectedUserType,
        nic: this.nic,
        contact: this.contact,
        district: this.district,
        homeAddress: this.homeAddress,
        businessAddress: this.businessAddress,
      };
    } else {
      userDetails = {
        selectedUserType: this.selectedUserType,
        nic: this.nic,
        contact: this.contact,
        organization: this.organization,
        designation: this.designation,
        organizationAddress: this.organization
      };
    }

    const user: User = JSON.parse(localStorage.getItem('user'));
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`userDetails/${user.uid}`);
    userRef.set(userDetails, {
      merge: true
    }).then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
    });


  }

}
