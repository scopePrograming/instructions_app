import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/admin/service.service';

@Component({
  selector: 'app-showsingleuser',
  templateUrl: './showsingleuser.component.html',
  styleUrls: ['./showsingleuser.component.scss']
})
export class ShowsingleuserComponent implements OnInit {

  singleInstruction: any = []
  singleUser: any = []
  result: any = {}
  msgCheck: any = null
  headTitle: string = 'Data of user'
 
  constructor(public _userService: ServiceService, private router: ActivatedRoute, private _router: Router) {
    this.getSingleUser()
    
  }

  ngOnInit(): void {
    this.getSingleInstruction()
  }

  getSingleUser() {
    let id = this.router.snapshot.paramMap.get('id')
    this._userService.showSingleUser(id).subscribe(res => {
      this.result = res
      this.singleUser = this.result.success
    },
      (e) => {
        this.msgCheck = e.error.message
      },
      () => {
        this.msgCheck = this.result.message
      })
  }

  getSingleInstruction() {
    let id = this.router.snapshot.paramMap.get('id')
    this._userService.showInstructionsUser(id).subscribe(res => {
      this.result = res
      this.singleInstruction = this.result.success
      console.log(this.singleInstruction)
    },
      (e) => {
        this.msgCheck = e.error.message
      },
      () => {
        this.msgCheck = this.result.message
      })
  }

  deleteByAdmin(id: any) {
    this._userService.deleteSingleInstruction(id).subscribe(res => { },
      () => { },
      () => {
        this._router.navigate(['/instructions'])
      })
  }


}
