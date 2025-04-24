import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  constructor(private ts:AuthService,private router:Router){}
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
    this.ts.logout() //calling service to remove locally stored details
    this.router.navigate([''])
  }


  /* modal: any;

  ngAfterViewInit(): void {
    const modalElement = document.getElementById('warningModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }
  constructor(private ts:AuthService,private router:Router){}
onLogout(){
  
}
openModal() {
  if (this.modal) {
    this.modal.show();
  }
}

closeModal() {
  if (this.modal) {
    this.modal.hide();
  }
}
closeModal1() {
  if (this.modal) {
    this.modal.hide();
    this.ts.logout()
    this.router.navigate([''])
  }
} */
}
