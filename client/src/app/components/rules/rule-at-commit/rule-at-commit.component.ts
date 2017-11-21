import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-rule-at-commit',
  templateUrl: './rule-at-commit.component.html',
  styleUrls: ['./rule-at-commit.component.css']
})
export class RuleAtCommitComponent implements OnInit {
  ruleId: number;
  commitId: number;
  result: Object;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onGetInfoSubmit() {
    if (!this.ruleId || !this.commitId) {
      this.flashMessage.show('Missing parameters', {
        cssClass: 'alert-danger',
        timeout: 5000});
    } else {    
      this.authService.getRuleAtCommit(this.ruleId, this.commitId).subscribe(data => {
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
    this.ruleId = null;
    this.commitId = null;
    this.result = null;
  }
  
  getRuleLastCommit(lastCommit) {
    return JSON.stringify(lastCommit, undefined, 2);
  }

}
