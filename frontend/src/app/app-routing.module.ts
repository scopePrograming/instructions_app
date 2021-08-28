import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { AddinstructionsComponent } from './admin/pages/instructions/addinstructions/addinstructions.component';
import { ShowallusersComponent } from './admin/pages/users/showallusers/showallusers.component';
import { AuthGuard } from './helper/auth.guard';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'instructions', component: AddinstructionsComponent },
      { path: 'users', component: ShowallusersComponent },
      
    ]
  },
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
