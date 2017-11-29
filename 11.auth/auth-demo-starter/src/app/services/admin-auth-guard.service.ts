import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    const user = this.auth.currentUser;
    if ( user && user.admin ) {
      return true;
    }
    this.router.navigate(['/no-access']);
    return false;
  }
}
