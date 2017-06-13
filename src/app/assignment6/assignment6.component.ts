import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {
  email: string;
  subscription: string;
  password: string;
  formHasBeenSubmitted = false;
  availableSubscriptions = [
    {name: 'Basic', value: 'basic'},
    {name: 'Advanced', value: 'advanced'},
    {name: 'Pro', value: 'pro'}
  ];
  defaultSelectValue = 'advanced';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formHasBeenSubmitted = true;
      this.email = form.value.email;
      this.subscription = form.value.subscription;
      this.password = form.value.password;
      console.log('Email: ' + this.email);
      console.log('Subscription: ' + this.subscription);
      console.log('Password: ' + this.password);
    }
  }
}
