import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openRightSideNav: boolean = false


  constructor(private router : Router){}

  navigateToLogin(){
    this.router.navigate(['login']);
  }
}
