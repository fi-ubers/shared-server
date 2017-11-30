import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.css']
})
export class CommitsListComponent implements OnInit {
  id: number;
  commitsList: Array<Object>;
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
      this.authService.getCommitsList(this.id).subscribe(list => {
        this.commitsList = list.commits;
        this.total = list.metadata.total;
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
    this.commitsList = null;
    this.total = null;
    this.key = 'id';
    this.reverse = false;
    this.p = 1;
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  getCommitAuthor(author) {
    return JSON.stringify(author, undefined, 2);
  }
}
