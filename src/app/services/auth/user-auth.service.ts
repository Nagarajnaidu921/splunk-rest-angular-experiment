import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private next = '';
  constructor(
    private tokenServ: TokenService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams
      .subscribe(params => this.next = params['next'] || '/');
   }

  

  login(data) {
    // console.log(data);
    this.http.post('http://localhost:3000/auth/login', data)
    .subscribe((resData: any) => {
      this.tokenServ.token = resData.sessionKey;
      this.router.navigate([this.next]);
      // console.log(resData);
    },
    (err)=>{
      const { error } = err;
      swal({
        type: 'warning',
        title: error.text,
        text: error.code,
        timer: 2000
      })
    })
    }

    isLoggedIn() {
      const { token, isTokenExpired } = this.tokenServ;

      return (token && !isTokenExpired);
    }

    logout() {
      this.tokenServ.reMoveToken();
      this.router.navigate(['/login']);
    }
}
