import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';

// Shared
import { SharedModule } from './shared/shared.module';

import { AdminComponent } from './admin.component';

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
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'



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
    AdminRoutingModule,
    ReactiveFormsModule,
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
    MatInputModule,
    MatSortModule,
    MatCardModule,

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class AdminModule { }
