import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'app';
  isLogedIn;
  pageUrl;
  constructor(private router:  Router) { }

  ngOnInit() {
    if(localStorage.getItem('isLogedIn') === 'true') {
      this.isLogedIn =  true;

      setTimeout(function() {
        $('.button-collapse').sideNav({closeOnClick: true});
      }, 500);
    } else {
      this.isLogedIn =  false;
    }
    console.log(this.isLogedIn);
    this.router.events.subscribe(url => { // fires on every URL change
        if(url instanceof NavigationEnd) {
          this.pageUrl = url['url'].split('/')[1];
          console.log(this.pageUrl);
        }
      })
    }
}
