import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent {
  userForm: FormGroup;

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

  constructor(private fb: FormBuilder,private ts:ProfileService) {
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

  onSubmit() {
    if (this.userForm.valid) {
      const data =this.userForm.value;
      const full ={...data,approval:'pending'}
      console.log(full)
      //adding profile data
      this.ts.addProfiles(full).subscribe(
        res=>{
          console.log(res)
          this.userForm.reset({
            name: '',
            birthTime: '',
            fathersName: '',
            dob: '',
            gender: '',
            education: '',
            email: '',
            house: '',
            siblingMarriage: '',
            mothersName: '',
            phone: '',
            maritalStatus: '',
            resiAddress: '',
            perAddress: '',
            religion: '',
            expectation: '',
            caste: '',
            pic01: '',
            job: '',
            pic02: '',
            jadhagam: '',
            salary: ''
          })
        },
        err=>console.log(err)
      ) 
    } else {
      this.userForm.markAllAsTouched();
      alert("Please fill")
    }
}

 
}
