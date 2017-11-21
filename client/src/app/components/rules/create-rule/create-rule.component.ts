import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.css']
})
export class CreateRuleComponent implements OnInit {
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
  
  onCreateSubmit() {
    const rule = {
      language: this.language,
      blob: this.blob,
      active: this.active
    }
    
    this.authService.createRule(rule).subscribe(data => {
      this.flashMessage.show('Rule created!', {
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
  
  clearForm() {
  	this.language = null;
  	this.blob = null;
  	this.active = false;
  	this.result = null;
  }
  
  onCreateClick() {
    this.clearForm();
  }
  
  getRuleLastCommit(lastCommit) {
    return JSON.stringify(lastCommit, undefined, 2);
  }

}
