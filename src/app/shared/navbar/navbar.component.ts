import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../../authentication/store/auth.state';
import {authActions} from '../../authentication/store/auth.actions';
import { selectUser } from '../../authentication/store/auth.selectors';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  public isDropdownOpen: boolean = false;
  public userInitials: string = '';
  public name: string = '';
  public role: string = '';
  public image: string | null = null;

  public constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    const currentUser = this.store.selectSignal(selectUser);
    const user = currentUser();
    if (user) {
      this.name = user.name;
      this.role = user.role;
      this.image = user.image;
      this.userInitials = this.getInitials(user.name);
    }
  }

  private getInitials(name: string): string {
    if (!name) return '';

    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  }


  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  public settings(): void {
    this.isDropdownOpen = false
  }

  public profile(): void {
    this.isDropdownOpen = false
  }

  public logout(): void {
    authActions.logout();
    this.isDropdownOpen = false
  }
}
