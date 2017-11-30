import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  _ref: String;
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
  
  onUpdateSubmit() {
    const businessUser = {
      _ref: this._ref,
      username: this.username,
      password: this.password,
      name: this.name,
      surname: this.surname,
      roles: this.createRolesArray()
    }
    this.id = parseInt(this.id);
    
    if (!this.id || (!this.manager && !this.admin && !this.user)) {
      this.flashMessage.show('Missing parameters', {
          cssClass: 'alert-danger',
          timeout: 5000});
    } else {
      this.authService.updateBusinessUser(this.id, businessUser).subscribe(data => {
        this.flashMessage.show('Business user updated!', {
          cssClass: 'alert-success',
          timeout: 5000
        });
      
        this.result = data.businessUser;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  clearForm() {
    this.id = null;
    this._ref = null;
  	this.username = null;
  	this.password = null;
  	this.name = null;
  	this.surname = null;
  	this.admin = null;
  	this.manager = null;
  	this.user = null;
  	this.result = null;
  }
  
  onUpdateClick() {
    this.clearForm();
  }

}
