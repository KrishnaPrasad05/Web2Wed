import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(private router:Router){}
  showModal = false;

  isActive(route:string):boolean{
    return this.router.url===route;
  }
  
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  logout() {
    console.log('User has been logged out.');
    this.closeModal();
    
    this.router.navigate([''])
  }
}
