import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: Array<Object>;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getUsersList().subscribe(list => {
      this.usersList = list.users;
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
  
  obtainUserCars(cars) {
    return cars.map(car => JSON.stringify(car)).join(', ');
  }
  
  obtainUserBalance(balance) {
    return balance.map(cost => JSON.stringify(cost)).join(', ');
  }

}
