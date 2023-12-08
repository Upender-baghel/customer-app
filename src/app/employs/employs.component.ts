import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route ,Router } from '@angular/router';


@Component({
  selector: 'app-employs',
  templateUrl: './employs.component.html',
  styleUrl: './employs.component.css'
})
export class EmploysComponent {

  constructor(private toast:ToastrService, private route:Router){

  }

homeForm! : FormGroup;
  ngOnInit(){
    this.homeForm =new FormGroup({
      username : new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      mobile : new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]),
      date: new FormControl('',[
        Validators.required
      ])
    })
  }
  
 get username() {
    return this.homeForm.get('username')
  }
  get mobile() {
    return this.homeForm.get('mobile')
  }
  get email() {
    return this.homeForm.get('email')
  }
  
  get date(){
    return this.homeForm.get('date')
  }
  
  onSubmit(){

    console.log(this.homeForm.value);
    
  }
logout(){
  this.route.navigate(['/login'])

  this.toast.success("Welcome To Login Page")

}


}
