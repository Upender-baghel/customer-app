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
  passpassword:boolean = false
  cunpassword:boolean = false

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
      ]),
      cpassword: new FormControl('', [
        Validators.required])
    })
  }
  PasswordVisibility(): void {
    this.passpassword = !this.passpassword
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

  get cpassword() {
    return this.registerForm.get('cpassword')
  }
  // onClick() {

  //   if(this.registerForm.valid){
  //     console.log(this.registerForm.value);
  //     this.route.navigate(['login']);
  //     this.toast.success("Welcome To Login Page")
      
  //   }else{
  //     console.log("nooo");
      
  //   }
    
    
  // }

  onClick() {

    if (this.registerForm.valid) {

      if (this.password?.value !== this.cpassword?.value) {
        this.toast.warning('Password Does not Match');

      }else{

        // if(this.registerForm.value.email === users.value.email){}
        const data = this.registerForm.value;
        let users =JSON.parse(localStorage.getItem('RegisterUsers') || '[]');
        users.push(data)
        console.log(users);
        
        localStorage.setItem('RegisterUsers', JSON.stringify(users));

        this.toast.success('User Registered Successfully');
        this.route.navigate(['/login']);
        this.registerForm.reset();
      }
    }else{
      this.toast.warning('Please Fill Your All Input Fields');
      this.registerForm.markAllAsTouched();
    }
    
  }
        

        

}
