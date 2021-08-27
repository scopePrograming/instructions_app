import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ShowallusersComponent } from './admin/pages/users/showallusers/showallusers.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'showallusers', component: ShowallusersComponent },    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
