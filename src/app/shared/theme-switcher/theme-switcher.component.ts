import {Component, OnInit} from '@angular/core';
import { useThemeSwitcher } from '../../utils/theme-context';
import { constants } from '../../utils/constants';

@Component({
  selector: 'app-theme-switcher',
  standalone: false,

  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  private storage = useThemeSwitcher('theme', constants.lightTheme);
  public isDark: boolean = this.storage.value() === constants.darkTheme;

  public constructor() {}

  public ngOnInit(): void {
    this.isDark = this.storage.value() === constants.darkTheme;
  }

  themeSwitcher(): void {
    const newTheme: string = this.isDark ? constants.lightTheme : constants.darkTheme;
    this.storage.value.set(newTheme);
    this.isDark = newTheme === constants.darkTheme;
    document.body.setAttribute('data-theme', newTheme);
  }
}
