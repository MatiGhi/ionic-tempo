import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  public items = [1,2,3,4,5];
  public segment = "restaurantes";

  constructor( private router: Router ) { }

  ngOnInit() {
    /* if(localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    } */
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.segment = ev.detail.value;
  }

}
