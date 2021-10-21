import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionStatus, NetworkService } from './../services/network.service';
import { debounceTime } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  public conectado: Boolean;

  constructor( 
    private router: Router,
    private networkService: NetworkService,
    private changeRef: ChangeDetectorRef ) { }

  ngOnInit() {
    //this.networkSubscriber();
   /*  if(localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    } */
  }

  networkSubscriber(): void {
    this.networkService
      .onNetworkChange()
      .pipe(debounceTime(300))
      .subscribe((connected: ConnectionStatus) => {
        this.conectado = Boolean(Number(connected));
        this.changeRef.detectChanges();
      });
  }

}
