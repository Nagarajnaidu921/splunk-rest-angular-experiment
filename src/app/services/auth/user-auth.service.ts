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
    const body = new URLSearchParams();
    body.set('username', data.username);
    body.set('password', data.password);
    body.set('output_mode', 'json');
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

  };

  console.log(body.toString());

      this.http.post('https://localhost:8089/services/auth/login', body.toString(), options).subscribe(
        (resData) => {
          console.log(resData);
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(data);
    }
}
