import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../providers/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Loader } from '../../providers/loader';
declare var Materialize;
@Component({
  selector: 'app-create-scaling-group',
  templateUrl: './create-scaling-group.component.html',
  // styleUrls: ['./create-scaling-group.component.sass']
})
export class CreateScalingGroupComponent implements OnInit {
  loadBalancers;
  snapShots;
  scriptType;
  scalingGroupForm: FormGroup;
  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.scalingGroupForm = new FormGroup({
      'load_balancer_id': new FormControl('', Validators.required),
      'snapshot_id': new FormControl('', Validators.required),
      'desired_instance_count': new FormControl('', Validators.required),
      'max_instance_count': new FormControl('', Validators.required),
      'cool_down_time': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'ansible_repo': new FormControl(''),
      'setup_type': new FormControl('', Validators.required),
      'bootstrap_script': new FormControl('', ),
      'termination_policy': new FormControl('oldest launch configuration', Validators.required),
      'max_cpu_usage': new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    Loader.present()
    Observable.forkJoin(
      this.http.get('/api/snapshots').map(res => res.json()),
      this.http.get('/api/load_balancers').map(res => res.json())
    ).subscribe(data => {
      this.snapShots =  data[0].response.snapshots;
      this.loadBalancers =  data[1].response.load_balancers;
      console.log(data);
      Loader.dismiss()
      Materialize.updateTextFields();
    })
  }
  changeSetupType(type) {
    this.scriptType = type;
    Materialize.updateTextFields();
  }
  submit() {
    this.http.post('/api/autoscaling_groups', this.scalingGroupForm.value).map(res => res.json())
    .subscribe(data => {
      console.log(data);
      Materialize.toast('Scaling group created succesfully');
      this.router.navigate(['scaling-groups']);
    })
    console.log(this.scalingGroupForm.value);
  }
}
