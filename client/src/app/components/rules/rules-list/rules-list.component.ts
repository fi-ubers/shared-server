import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css']
})
export class RulesListComponent implements OnInit {
  rulesList: Array<Object>;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getRulesList().subscribe(list => {
      this.rulesList = list.rules;
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
  
  getRuleLastCommit(lastCommit) {
    return JSON.stringify(lastCommit, undefined, 2);
  }

}
