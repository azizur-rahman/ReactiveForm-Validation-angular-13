import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

declare function uapa(): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Bootstrap with angular';

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    var ss = uapa();
    console.log(ss);
  }


  loginForm: FormGroup = this.formBuilder.group({
    user: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  userLogin() {

    if (this.loginForm.valid) {

      console.warn(this.loginForm.value);

    }

  }

  get info() {
    return this.loginForm.controls;
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password')
  }

}
