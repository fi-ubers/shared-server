import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
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
      this.authService.deleteUser(this.id).subscribe(data => {
        this.flashMessage.show('Application user ' + this.id +' removed!', {
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
