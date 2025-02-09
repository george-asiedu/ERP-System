import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../../authentication/store/auth.state';
import {selectUser} from '../../authentication/store/auth.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public name: string = '';
  public today: Date = new Date();

  public constructor(private store: Store<AuthState>) {}

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUser);
    const user = currentUser();
    if (user) this.name = user.name;
  }
}
