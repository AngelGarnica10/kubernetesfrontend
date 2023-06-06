import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserResponse } from '@app/store/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @Input() user!: UserResponse | null;
  @Input() isAuthorized!: boolean | null;

  ngOnInit(): void {
  }

  onMenuToggleDispatch(): void {
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }
}
