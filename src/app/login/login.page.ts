import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { ConnectionStatus, NetworkService } from './../services/network.service';
import { debounceTime, filter, pairwise } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UserService]
})
export class LoginPage implements OnInit {

  public user: User;
  public error: [];
  public conectado: Boolean;
  private prevPage: string;

  constructor(private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private networkService: NetworkService,
    private changeRef: ChangeDetectorRef) {
    this.user = new User('', '');
  }



  ngOnInit() {
    this.networkSubscriber();
    // if(localStorage.getItem('token') !== null) {
    //   this.router.navigate(['/home/pedir']);
    //   /* alert(localStorage.getItem('token'));
    //   this.route.params.subscribe(() => {
    //   }); */
    // }
    
  }

  onSubmit() {
    this.router.navigate(['/home/pedir']);
    // this._userService.login(this.user).subscribe(
    //   response => {
    //     console.log(response);
    //     if(response.errnro == 0 && response.msg == "Success.") {
    //       localStorage.setItem('token', response.data.token);
    //       this.router.navigate(['/home/pedir']);
    //     }
    //   },
    //   error => {
    //     this.error = error.error;
    //   }
    // );
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

  getPrevPage(): void {
    this.router.events
                .pipe(filter((event: any) => event instanceof RoutesRecognized), pairwise())
                .subscribe((events: RoutesRecognized[]) => {
                  this.prevPage = events[0].urlAfterRedirects;
                  alert(this.prevPage);
                });
  }  


}
