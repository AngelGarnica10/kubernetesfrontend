import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Output() menuToggle = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @Input() isAuthorized!: boolean | null;

  closeMenu(): void {
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }
}
