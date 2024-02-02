import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-employs',
  templateUrl: './employs.component.html',
  styleUrl: './employs.component.css'
})
export class EmploysComponent {

  constructor(private toast: ToastrService, private route: Router) {

  }

  homeForm!: FormGroup;
  data: any[] = []
  table: boolean = false
  index: any = []
  sub:boolean = true 
  upda:boolean = false



  ngOnInit() {
    this.homeForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]),
      date: new FormControl('', [
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

  get date() {
    return this.homeForm.get('date')
  }

  onSubmit() {

    
    if (this.homeForm.valid) {

      this.data.push(this.homeForm.value)
      this.table = true
      this.toast.success("add User Successful")
      this.homeForm.markAllAsTouched();
      this.homeForm.reset()
      // console.log("this is value ");

      // if(this.data.length < 1){
      //   this.table = false 
      // }

    } else {
      this.homeForm.reset();
      
      this.toast.error("Please Fill Details Proper")
      // console.log("error");

    }

    console.log(this.homeForm.value);

  }
  logout() {

    this.route.navigate(['/login'])

    this.toast.success("Welcome To Login Page")

  }


  delete(i: any) {
    this.data.splice(i, 1)
    this.toast.warning('Employs Delete Success')
  }

  edit(i: any) {
    this.index = i
    this.homeForm.patchValue({ username: this.data[i].username,
       mobile: this.data[i].mobile,
        email: this.data[i].email,
         date: this.data[i].date })
     this.sub= false ;    
     this.upda = true ;
     

  }

  update(){

    this.sub = true
    this.upda = false 
    this.data[this.index] = this.homeForm.value
    this.homeForm.reset();
    this.toast.info('Update Successful')
  }


}
