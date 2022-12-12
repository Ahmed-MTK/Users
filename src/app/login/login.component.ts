import { Component } from '@angular/core';
import { Router } from '@angular/router';
import *  as global from '../global'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}
  users = global.USERS;

  submitted = false;
  email = "";
  password ="";
  existingUser = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.users)
    for (var i=0; i<this.users.length;i++){
      console.log(this.users[i])
      console.log(this.users[i].email)
      console.log(this.users[i].password)
      if(this.users[i].email == this.email && this.users[i].password == this.password)
        this.router.navigate(['/list'])
      else
        this.existingUser = true;
    
    }
    // for (let user in this.users){
    //   console.log(user.email)
    // }
    
  }

}
