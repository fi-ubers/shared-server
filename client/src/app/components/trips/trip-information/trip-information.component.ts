import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-trip-information',
  templateUrl: './trip-information.component.html',
  styleUrls: ['./trip-information.component.css']
})
export class TripInformationComponent implements OnInit {
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
      this.authService.getTrip(this.id).subscribe(data => {
        this.result = data.trip;
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
  
  getTripStart(start) {
    return JSON.stringify(start, undefined, 2);
  }
  
  getTripEnd(end) {
    return JSON.stringify(end, undefined, 2);
  }
  
  getTripRoute(route) {
    return route.map(position => JSON.stringify(position, undefined, 2)).join(', ');
  }
  
  getTripCost(cost) {
    return JSON.stringify(cost, undefined, 2);
  }

}
