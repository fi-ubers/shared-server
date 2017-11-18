import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onDeleteSubmit() {
    this.authService.deleteBusinessUser(this.id).subscribe(data => {
      this.flashMessage.show('Business user ' + this.id +' removed!', {
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
