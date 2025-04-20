import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare var bootstrap:any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements AfterViewInit{
  userForm:FormGroup;
  modal: any;
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('warningModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
    }
  constructor(private fb:FormBuilder,private ts:AuthService,private router:Router){
    this.userForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  onLogin():void{
    //perform login operation and stores certain details required for further operation
    if(this.userForm.valid){
      this.ts.authUser(this.userForm.value).subscribe(
        res=>{
          if(res.message==='admin'){
            this.router.navigate(['/admin-home'])
          }
          else{
            console.log(res.token,res.userId,res.email,res.phone);
            this.ts.storeUserData(res.token,res.userId,res.email,res.phone)
             this.router.navigate(['/home'])
             this.userForm.reset({
               email:'',
               password:''
             })
          }
          
        },
        err=>console.log(err)
      )
    }
    else {
      this.userForm.markAllAsTouched();
      this.openModal()
    }
    
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
  }
  
