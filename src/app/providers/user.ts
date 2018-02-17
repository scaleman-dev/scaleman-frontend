import { Doctype } from '@angular/compiler/src/i18n/serializers/xml_helper';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import { HttpService } from './http';
import { Util } from './util';

export class User {
  email: string;
  isLoggedIn: boolean;
}

@Injectable()
export class UserService {
  profile;
  currentUrl = window.location.origin + '/login';
  private tokenRefreshSubscription: Subscription;
  constructor(private http: HttpService, private util: Util, private router: Router) {}

  public login(email, password) {
    localStorage.clear();
    let payload;
    payload = {
      email: email,
      password: password,
    };
    return this.http.post('/api/login', payload)
  }


  public getUser() {
    const user: User = new User();
    if (localStorage.getItem('isLoggedIn')) {
      user.email = localStorage.getItem('email');
      user.isLoggedIn = true;
    } else {
      user.isLoggedIn = false;
    }
    return user;
  }


  public logout() {
    localStorage.clear();
  }
}