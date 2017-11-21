import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-server-reset-token',
  templateUrl: './server-reset-token.component.html',
  styleUrls: ['./server-reset-token.component.css']
})
export class ServerResetTokenComponent implements OnInit {
  id: number;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onGetInfoSubmit() {
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {    
      this.authService.resetServerToken(this.id).subscribe(data => {
        this.result = data.server;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  onGetInfoClick() {
    this.id = null;
    this.result = null;
  }

}
