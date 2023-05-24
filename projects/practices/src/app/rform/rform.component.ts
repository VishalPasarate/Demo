import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
  signupForm: any;
  storageKey: any;

  constructor(private formBuilder:FormBuilder, private _http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  signup(){
  
  }
  get name() {
    return this.signupForm.get('name')
  }

  get email() {
    return this.signupForm.get('email')
  }
  get password() {
    return this.signupForm.get('password')
  }
  
}
