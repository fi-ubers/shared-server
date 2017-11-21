import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-server',
  templateUrl: './delete-server.component.html',
  styleUrls: ['./delete-server.component.css']
})
export class DeleteServerComponent implements OnInit {
  id: number;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onDeleteSubmit() {
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
          cssClass: 'alert-danger',
          timeout: 5000});
    } else {
      this.authService.deleteServer(this.id).subscribe(data => {
        this.flashMessage.show('Server ' + this.id +' removed!', {
          cssClass: 'alert-success',
          timeout: 5000
        });
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }

}
