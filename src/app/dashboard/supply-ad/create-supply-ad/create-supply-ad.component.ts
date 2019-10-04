import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-supply-ad',
  templateUrl: './create-supply-ad.component.html',
  styleUrls: ['./create-supply-ad.component.scss']
})
export class CreateSupplyAdComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  createAdForm: FormGroup;
  attempted = false;
  processing = false;

  get formControls() {
    return this.createAdForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createAdForm = this.formBuilder.group({
      mainCategory: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  createAdd() {}
}
