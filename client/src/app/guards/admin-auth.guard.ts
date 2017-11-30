import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(
    private authService:AuthService, 
    private router:Router
  ) { }
    
  canActivate() {
    if(this.authService.roleLoggedIn('admin')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
