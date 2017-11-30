import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {
  id;
  _ref: String;
  name: String;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onUpdateSubmit() {
    const server = {
      _ref: this._ref,
      name: this.name
    }
    this.id = parseInt(this.id);
    
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {  
      this.authService.updateServer(this.id, server).subscribe(data => {
        this.flashMessage.show('Server updated!', {
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
    this.id = null;
    this._ref = null;
    this.name = null;
  	this.result = null;
  }
  
  onUpdateClick() {
    this.clearForm();
  }

}
