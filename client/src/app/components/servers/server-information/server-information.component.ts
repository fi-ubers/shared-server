import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-server-information',
  templateUrl: './server-information.component.html',
  styleUrls: ['./server-information.component.css']
})
export class ServerInformationComponent implements OnInit {
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
      this.authService.getServer(this.id).subscribe(data => {
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
