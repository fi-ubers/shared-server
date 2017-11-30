import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  userId: number;
  carId: number;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onDeleteSubmit() {
    if (!this.userId || !this.carId) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else { 
      this.authService.deleteCar(this.userId, this.carId).subscribe(data => {
        this.flashMessage.show('Car ' + this.carId + 'of application user ' + this.userId +' removed!', {
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
