import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Shared
import { SharedModule } from './shared/shared.module';


// Login to dashboard
import { LoginComponent } from './login/login.component';

import { ShowallusersComponent } from './pages/users/showallusers/showallusers.component';
import { ShowsingleuserComponent } from './pages/users/showsingleuser/showsingleuser.component';
import { ShowallinstructionsComponent } from './pages/instructions/showallinstructions/showallinstructions.component';
import { AddinstructionsComponent } from './pages/instructions/addinstructions/addinstructions.component';
import { HomeComponent } from './home/home.component';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ShowallusersComponent,
    ShowsingleuserComponent,
    ShowallinstructionsComponent,
    AddinstructionsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Shared
    SharedModule,

    // Materail modules
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSortModule,
  ]
})
export class AdminModule { }
