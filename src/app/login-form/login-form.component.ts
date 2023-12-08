import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService as ToastService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  login!:FormGroup;

  constructor(private fb: FormBuilder, private toast: ToastService , private route:Router) {

  }

  ngOnInit(){
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

  submit() {
    if (this.login.valid) {
      this.route.navigate(['/employs']);
      this.toast.success("login In Successful");
      this.login.reset();
    } else {
      this.toast.error('Form is not valid. Please check your inputs.');
    }
  }

}
