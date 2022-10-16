import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Login } from 'src/app/models';
//import { LoginService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  i//mages = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  form!: FormGroup;

  constructor() { }

  ngOnInit() {

  }





}
