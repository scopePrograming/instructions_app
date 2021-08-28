import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private commonURL = `http://localhost:3000/user/`
  constructor(private _http: HttpClient) { }


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
