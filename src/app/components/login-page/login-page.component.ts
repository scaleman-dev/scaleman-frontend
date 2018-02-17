import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../providers/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

declare var $;
declare var Materialize;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [HttpService]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if(localStorage.getItem('isLogedIn') === 'true') {
      this.router.navigate(['dashboard']);
    }
  }
  login() {
    if (this.loginForm.valid) {
      Materialize.toast('Please Wait', 1000);
      let payload = {
        email: this.loginForm.value['userName'],
        password: this.loginForm.value['password'],
      };
      this.http.post('/api/login', payload)
        .map(res => res.json())
        .subscribe(data => {
          Materialize.toast('login successful', 1000);
          localStorage.setItem('isLogedIn', 'true');
          localStorage.setItem('userName', payload.email);
          console.log(data);
        }, error => {
          console.log(error);
          Materialize.toast('Incorrect credentials', 5000, 'toast-fail');
        });
    }
  }
}
