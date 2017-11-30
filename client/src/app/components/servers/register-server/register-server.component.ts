import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as moment from 'moment';

@Component({
  selector: 'app-register-server',
  templateUrl: './register-server.component.html',
  styleUrls: ['./register-server.component.css']
})
export class RegisterServerComponent implements OnInit {
  createdBy;
  createdTime: String;
  name: String;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onRegisterSubmit() {
    const server = {
      createdBy: this.createdBy,
      createdTime: this.createdTime,
      name: this.name
    }
    this.createdBy = parseInt(this.createdBy);
    
    if (!this.createdBy) {
      this.flashMessage.show('Created by must be a number', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else if (!moment(this.createdTime, moment.ISO_8601, true).isValid()) {
      this.flashMessage.show("Invalid timestamp: Please use format 'YYYY-MM-DDTHH:mm:ss'", {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {
      this.authService.registerServer(server).subscribe(data => {
        this.flashMessage.show('Server registered!', {
          cssClass: 'alert-success',
          timeout: 5000
        });
      
        this.result = data.server;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  clearForm() {
  	this.createdBy = null;
  	this.createdTime = null;
  	this.name = null;
  	this.result = null;
  }
  
  onRegisterClick() {
    this.clearForm();
  }

}
