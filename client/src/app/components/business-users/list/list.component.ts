import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  businessUsersList: Array<Object>;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getBusinessUsersList().subscribe(list => {
      this.businessUsersList = list.businessUser;
      this.total = list.metadata.total;
      console.log(this.total)
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

}
