import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  login!: FormGroup;

  constructor(private fb: FormBuilder, private toast: ToastrService, private route: Router) {

  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.login = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }



  get password() {
    return this.login.get('password');
  }

  get email() {
    return this.login.get('email');
  }

  // submit() {
  //   if (this.login.valid) {
  //     this.route.navigate(['/employs']);
  //     this.toast.success("login  Successful");
  //     this.login.reset();
  //   } else {
  //     this.toast.error('Form is not valid. Please check your inputs.');
  //   }
  // }


  submit() {

    if (this.login.valid) {

      
        


        console.log(this.login.value);

        let user = JSON.parse(localStorage.getItem('RegisterUsers') || '{}');
        // let founduser = user.find(u => user.email === this.login.value.email )
        if (user) {
          // console.log(user, 'RegisterUsers')

          for (let i = 0; i < user.length; i++) { 

            // console.log(user[i].email, 'data first');

            if (this.login.value.email === user[i].email) {
              console.log("email Successfully verified");



              if (this.login.value.password === user[i].password) {
                this.route.navigate(['/employs'])
                this.toast.success('Login Successful 😎😉')
                break

              } else {

                this.toast.error("Password Not Match ");
                break
              }
            
          }else {
            this.toast.error(" Email Address Not Match");
            break


          }

        }
      }
    } else {
      this.login.markAllAsTouched();
      this.toast.error("Please Fill All Input Field")

    }
  


  }

}
