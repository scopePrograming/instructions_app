import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private commonURL = `http://localhost:3000/user/`
  private commonAdminURL = `http://localhost:3000/admin/`
  constructor(private _http: HttpClient) { }

  showAllUsers(): Observable<any> {
    return this._http.post(`${this.commonAdminURL}all`, null)
  }

  showSingleUser(id: any): Observable<any> {
    return this._http.get(`${this.commonAdminURL}single/${id}`)
  }

  deleteUserByAdmin(id: any): Observable<any> {
    return this._http.delete(`${this.commonAdminURL}delUser/${id}`)
  }

  adminLogin(adminData: any): Observable<any> {
    return this._http.post(`${this.commonURL}login`, adminData)
  }

  adminLogout(): Observable<any> {
    return this._http.post(`${this.commonURL}logout`, null)
  }

  adminLogoutAll(): Observable<any> {
    return this._http.post(`${this.commonURL}logoutAll`, null)
  }
}
