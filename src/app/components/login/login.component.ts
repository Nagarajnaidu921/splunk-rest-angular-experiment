import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userAuthServ: UserAuthService
  ) { }

  ngOnInit() {
  }

  handleSubmit(form) {
    const inputData = Object.assign({}, form.form.value);
    console.log(inputData);
    this.userAuthServ.login(inputData);
  }
}
