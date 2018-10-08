import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private tokenServ: TokenService,
    private http: HttpClient
  ) { }

  login(data) {
    console.log(data);
    this.http.post('http://localhost:3000/auth/login', data)
    .subscribe(resData => {
      console.log(resData);
    },
    (err)=>{
      console.log(err);
    })
    }
}
