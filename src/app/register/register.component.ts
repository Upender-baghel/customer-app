import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router  , RouterModule } from '@angular/router';
import { ToastrService  } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm! : FormGroup;

  constructor(private route:Router ,private toast: ToastrService){

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(9)
        ]),
      address: new FormControl(null, [
        Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
       ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  get name() {
    return this.registerForm.get('name')
  }

  get mobile() {
    return this.registerForm.get('mobile')
  }

  get address() {
    return this.registerForm.get('address')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  onClick() {

    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.route.navigate(['login']);
      this.toast.success("Welcome To Login Page")
      
    }else{
      console.log("nooo");
      
    }
    
    
  }

}
