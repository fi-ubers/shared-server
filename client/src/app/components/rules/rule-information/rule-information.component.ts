import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-rule-information',
  templateUrl: './rule-information.component.html',
  styleUrls: ['./rule-information.component.css']
})
export class RuleInformationComponent implements OnInit {
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
      this.authService.getRule(this.id).subscribe(data => {
        this.result = data.rule;
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
  
  getRuleLastCommit(lastCommit) {
    return JSON.stringify(lastCommit, undefined, 2);
  }

}
