import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update-current-profile',
  templateUrl: './update-current-profile.component.html',
  styleUrls: ['./update-current-profile.component.css']
})
export class UpdateCurrentProfileComponent {
  userForm: FormGroup;
  userId:any;
    formBool1:boolean=true;
    formBool2:boolean=false;
    active1:boolean=true;
    active2:boolean=false;
    showForm1():any{
       this.formBool1=false;
       this.formBool2=true;
       this.active1=false;
       this.active2=true;
    }
    showForm2():any{
      this.formBool1=true;
      this.formBool2=false;
      this.active1=true;
      this.active2=false;
    }
    constructor(private fb: FormBuilder,private ts:ProfileService,private route:ActivatedRoute,private router:Router) {
        this.userForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          birthTime: ['', [Validators.required, Validators.minLength(3)]],
          fathersName: ['', [Validators.required, Validators.minLength(3)]],
          dob: ['', [Validators.required, Validators.minLength(3)]],
          gender: ['', Validators.required],
          education: ['', Validators.required],
          email: ['', [Validators.required, Validators.minLength(3)]],
          house: ['', [Validators.required, Validators.minLength(3)]],
          siblingMarriage: ['', [Validators.required, Validators.minLength(3)]],
          mothersName: ['', [Validators.required, Validators.minLength(3)]],
          phone: ['', [Validators.required, Validators.minLength(3)]],
          maritalStatus: ['', [Validators.required, Validators.minLength(3)]],
          resiAddress: ['', [Validators.required, Validators.minLength(3)]],
          perAddress: ['', [Validators.required, Validators.minLength(3)]],
          religion: ['', [Validators.required, Validators.minLength(3)]],
          expectation: ['', [Validators.required, Validators.minLength(3)]],
          caste: ['', [Validators.required, Validators.minLength(3)]],
          pic01: ['', [Validators.required, Validators.minLength(3)]],
          job: ['', [Validators.required, Validators.minLength(3)]],
          pic02: ['', [Validators.required, Validators.minLength(3)]],
          jadhagam: ['', [Validators.required, Validators.minLength(3)]],
          salary: ['', [Validators.required, Validators.minLength(3)]]
        });
      }
      validateDOB(control: any) {
        const dob = new Date(control.value);
        const today = new Date();
        return dob < today ? null : { invalidDOB: true };
      }
    
      ngOnInit(): void {
        this.userId=this.route.snapshot.paramMap.get("id");
        this.getProfile(); //function to be executed immediately
      }
      getProfile(){
        this.ts.getProfile(this.userId).subscribe(
          res=>this.userForm.patchValue(res), //fetching already existing value
          error=>console.log(error)
        )
      }
  
      onSubmit() {
        if (this.userForm.valid) {
          //updating newer values to the existing ID
          this.ts.updateProfile(this.userId,this.userForm.value).subscribe(
            (response)=> {console.log("Updated Successfully", response)
              this.router.navigate(['/profile']);
            },
            (error)=>console.log("Error in update employee", error)
          )
        } else {
          this.userForm.markAllAsTouched();
        }
    }
  }
