import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {
  tripsList: Array<Object>;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getTripsList().subscribe(list => {
      this.tripsList = list.trips;
      this.total = list.metadata.total;
    },
    err => {
      console.log(err);
      return false;
    });
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
