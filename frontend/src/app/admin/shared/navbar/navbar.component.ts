import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkStatus = localStorage.getItem('status')

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  
  constructor(private _userService: ServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit()
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 200)
  }

  logout() {
    this._userService.adminLogout().subscribe(res => { },
      () => { },
      () => {
        localStorage.removeItem('token')
        localStorage.setItem('status', '1')
        this._router.navigate(['login'])
          // .then(() => {
          //   window.location.reload();
          // })
      })
  }

  logoutAll() {
    this._userService.adminLogoutAll().subscribe(res => { },
      () => { },
      () => {
        localStorage.removeItem('token')
        localStorage.setItem('status', '1')
        this._router.navigate(['login'])
      })
  }

}
