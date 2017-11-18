import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  name: String;
  surname: String;
  admin: boolean;
  manager: boolean;
  user: boolean;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  createRolesArray() {
    let roles: string[] = [];
    if (this.admin) {
      roles.push("admin");
    }
    
    if (this.manager) {
      roles.push("manager");
    }
    
    if (this.user) {
      roles.push("user");
    }
    
    return roles;
  }
  
  onRegisterSubmit() {
    const businessUser = {
      username: this.username,
      password: this.password,
      name: this.name,
      surname: this.surname,
      roles: this.createRolesArray()
    }
    
    this.authService.registerBusinessUser(businessUser).subscribe(data => {
      this.flashMessage.show('Business user registered!', {
        cssClass: 'alert-success',
        timeout: 5000
      });
      
      this.result = data.businessUser;
      this.router.navigate(['register']);
    },
    err => {
      this.flashMessage.show(err.json().message, {
        cssClass: 'alert-danger',
        timeout: 5000});
    });
  }
  
  clearForm() {
  	this.username = null;
  	this.password = null;
  	this.name = null;
  	this.surname = null;
  	this.admin = null;
  	this.manager = null;
  	this.user = null;
  	this.result = null;
  }
  
  onRegisterClick() {
    this.clearForm();
    //this.router.navigate(['register']);
  }
}
