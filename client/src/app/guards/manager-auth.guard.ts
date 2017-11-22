import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ManagerAuthGuard implements CanActivate {
  constructor(
    private authService:AuthService, 
    private router:Router
  ) { }
    
  canActivate() {
    if(this.authService.roleLoggedIn('manager')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
