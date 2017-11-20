import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-trips-list',
  templateUrl: './user-trips-list.component.html',
  styleUrls: ['./user-trips-list.component.css']
})
export class UserTripsListComponent implements OnInit {
  id: number;
  tripsList: Array<Object>;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onGetListSubmit() {
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {    
      this.authService.getUserTripsList(this.id).subscribe(data => {
        this.tripsList = data.trips;
        this.total = data.metadata.total;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  onGetListClick() {
    this.id = null;
    this.tripsList = null;
    this.total = null;
    this.key = 'id';
    this.reverse = false;
    this.p = 1;
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
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
