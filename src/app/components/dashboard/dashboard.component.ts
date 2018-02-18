import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../providers/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('isLogedIn') !== 'true') {
      this.router.navigate(['login']);
    }
  }

}
