import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  id: number;
  carsList: Array<Object>;
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
      this.authService.getUserCarsList(this.id).subscribe(data => {
        this.carsList = data.cars;
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
    this.carsList = null;
    this.total = null;
    this.key = 'id';
    this.reverse = false;
    this.p = 1;
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  getCarProperties(properties) {
    return properties.map(property => JSON.stringify(property, undefined, 2)).join(', ');
  }

}
