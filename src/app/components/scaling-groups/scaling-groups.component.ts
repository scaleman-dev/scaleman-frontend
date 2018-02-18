import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../providers/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Loader } from '../../providers/loader';


@Component({
  selector: 'app-scaling-groups',
  templateUrl: './scaling-groups.component.html',
  // styleUrls: ['./scaling-groups.component.sass']
})
export class ScalingGroupsComponent implements OnInit {
  scalingGroups;
  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    Loader.present()
    this.http.get('/api/autoscaling_groups').map(res => res.json())
    .subscribe(data => {
      console.log(data);
      this.scalingGroups = data.response;
      Loader.dismiss()
    })
  }

}
