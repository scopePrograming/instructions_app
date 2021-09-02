import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  

  sideBarOpen = true
  

  constructor() {
    
  }


  ngOnInit(): void {
    this.heddinSideBar()
  }
  
  heddinSideBar() {
    window.innerWidth > 991 ? this.sideBarOpen = true : this.sideBarOpen = false
  }

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen
  }

}
