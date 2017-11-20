import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cars-information',
  templateUrl: './cars-information.component.html',
  styleUrls: ['./cars-information.component.css']
})
export class CarsInformationComponent implements OnInit {
  userId: number;
  carId: number;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onGetInfoSubmit() {
    if (!this.userId || !this.carId) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {    
      this.authService.getCar(this.userId, this.carId).subscribe(data => {
        this.result = data.car;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  onGetInfoClick() {
    this.userId = null;
    this.carId = null;
    this.result = null;
  }
  
  getCarProperties(properties) {
    return properties.map(property => JSON.stringify(property)).join(', ');
  }

}
