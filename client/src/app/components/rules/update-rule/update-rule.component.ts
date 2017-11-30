import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-update-rule',
  templateUrl: './update-rule.component.html',
  styleUrls: ['./update-rule.component.css']
})
export class UpdateRuleComponent implements OnInit {
  id: number;
  _ref: String;
  language: String;
  blob: String;
  active: boolean = false;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onUpdateSubmit() {
    const rule = {
      _ref: this._ref,
      language: this.language,
      blob: this.blob,
      active: this.active
    }
    
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
          cssClass: 'alert-danger',
          timeout: 5000});
    } else {
      this.authService.updateRule(this.id, rule).subscribe(data => {
        this.flashMessage.show('Rule updated!', {
          cssClass: 'alert-success',
          timeout: 5000
        });
      
        this.result = data.rule;
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  clearForm() {
    this.id = null;
    this._ref = null;
  	this.language = null;
  	this.blob = null;
  	this.active = false;
  	this.result = null;
  }
  
  onUpdateClick() {
    this.clearForm();
  }
  
  getRuleLastCommit(lastCommit) {
    return JSON.stringify(lastCommit, undefined, 2);
  }


}
