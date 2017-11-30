import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-run-individual-rule',
  templateUrl: './run-individual-rule.component.html',
  styleUrls: ['./run-individual-rule.component.css']
})
export class RunIndividualRuleComponent implements OnInit {
  ruleId: number;
  facts: String;
  result: Array<String>;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onRunSubmit() {
    if (!this.ruleId || !this.facts) {
      this.flashMessage.show('Missing parameters', {
          cssClass: 'alert-danger',
          timeout: 5000});
    } else {
      const body = {
        facts: this.facts.split("#")
      }
      this.authService.runIndividualRule(this.ruleId, body).subscribe(data => {
        this.result = data.facts.map(fact => JSON.stringify(fact, undefined, 2));
        console.log(this.result)
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }
  
  clearForm() {
  	this.ruleId = null;
  	this.facts = null;
  	this.result = null;
  }
  
  onRunClick() {
    this.clearForm();
  }

}
