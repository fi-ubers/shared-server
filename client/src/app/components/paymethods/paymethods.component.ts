import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-paymethods',
  templateUrl: './paymethods.component.html',
  styleUrls: ['./paymethods.component.css']
})
export class PaymethodsComponent implements OnInit {
  paymethodsList: Array<Object>;
  key: String = 'name';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getPaymethodsList().subscribe(list => {
      this.paymethodsList = list.paymethods;
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
  
  obtainPaymethodParameters(parameters) {
    return JSON.stringify(parameters, undefined, 2);
  }
}
