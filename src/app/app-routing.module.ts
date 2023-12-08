import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { EmploysComponent } from './employs/employs.component';

export const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path: 'login',component:LoginFormComponent},
  {path:'register' , component:RegisterComponent },
  {path:'employs',component:EmploysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
