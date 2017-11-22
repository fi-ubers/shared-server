import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-run-all-rules',
  templateUrl: './run-all-rules.component.html',
  styleUrls: ['./run-all-rules.component.css']
})
export class RunAllRulesComponent implements OnInit {
  rules: String;
  facts: String;
  result: Array<String>;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onRunSubmit() {
    const body = {
      rules: this.rules.split(" "),
      facts: this.facts.split("#")
    }
    this.authService.runAllRules(body).subscribe(data => {
      this.result = data.facts.map(fact => JSON.stringify(fact, undefined, 2));
    },
    err => {
      this.flashMessage.show(err.json().message, {
        cssClass: 'alert-danger',
        timeout: 5000});
    });
  }
  
  clearForm() {
  	this.rules = null;
  	this.facts = null;
  	this.result = null;
  }
  
  onRunClick() {
    this.clearForm();
  }

}
