import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import *  as global from '../global'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  users = global.USERS;

 register : User = {
  firstName : '',
  lastName : '',
  password : '',
  address : '',
  city : '',
  phone : '',
  email : ''
 };

  constructor(private router:Router) {}

  ngOnInit() : void {}

  submitted = false;

  onSubmit(){
    this.submitted = true;
    this.users.push({firstName : this.register.firstName, lastName : this.register.lastName, password : this.register.password, address : this.register.address, city : this.register.city, phone : this.register.phone, email : this.register.email});
    this.router.navigate(['/login'])

  }

}

