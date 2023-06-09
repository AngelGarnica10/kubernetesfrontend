import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/services';
import * as fromRoot from './store';
import * as fromUser from './store/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kubernetesfrontend';
  showSpinner = false;
  user$!: Observable<fromUser.UserResponse>;
  isAuthorized$!: Observable<boolean>

  constructor(
    private notification: NotificationService,
    private store: Store<fromRoot.State>,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized)) as Observable<boolean>;
    this.store.dispatch( new fromUser.Init() )
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onFilesChanged( urls: string | string[] ): void {
    console.log('urls', urls);
  }

  onSuccess(): void {
    this.notification.success('El procedimiento fue exitoso')
  }

  onError(): void {
    this.notification.error('Hubo un problema')
  }

  onSignout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignOut());
    this.router.navigate(['/auth/login'])
  }
}
