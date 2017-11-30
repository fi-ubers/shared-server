import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  id: number;
  transactionsList: Array<Object>;
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
      this.authService.getUserTransactionsList(this.id).subscribe(data => {
        this.transactionsList = data.transactions;
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
    this.transactionsList = null;
    this.total = null;
    this.key = 'id';
    this.reverse = false;
    this.p = 1;
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  getTransactionCost(cost) {
    return JSON.stringify(cost, undefined, 2);
  }
  
  getTransactionData(data) {
    return JSON.stringify(data, undefined, 2);
  }

}
