import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  _ref: String;
  username: String;
  password: String;
  name: String;
  surname: String;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onUpdateSubmit() {
    const businessUser = {
      _ref: this._ref,
      username: this.username,
      password: this.password,
      name: this.name,
      surname: this.surname
    }
    
    this.authService.editMyInformation(businessUser).subscribe(data => {
      this.flashMessage.show('Information updated!', {
        cssClass: 'alert-success',
        timeout: 5000
      });
      this.authService.updateUserInStorage({
        username: this.username,
        password: this.password
      });
      this.result = data.businessUser;
      this.router.navigate(['edit']);
    },
    err => {
      this.flashMessage.show(err.json().message, {
        cssClass: 'alert-danger',
        timeout: 5000});
    });
  }
  
  clearForm() {
    this._ref = null;
  	this.username = null;
  	this.password = null;
  	this.name = null;
  	this.surname = null;
  	this.result = null;
  }
  
  onUpdateClick() {
    this.clearForm();
    //this.router.navigate(['edit']);
  }

}
