import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-rule',
  templateUrl: './delete-rule.component.html',
  styleUrls: ['./delete-rule.component.css']
})
export class DeleteRuleComponent implements OnInit {
  id: number;
  
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  
  onDeleteSubmit() {
    if (!this.id) {
      this.flashMessage.show('Missing parameters', {
          cssClass: 'alert-danger',
          timeout: 5000});
    } else {
      this.authService.deleteRule(this.id).subscribe(data => {
        this.flashMessage.show('Rule ' + this.id +' removed!', {
          cssClass: 'alert-success',
          timeout: 5000
        });
      },
      err => {
        this.flashMessage.show(err.json().message, {
          cssClass: 'alert-danger',
          timeout: 5000});
      });
    }
  }

}
