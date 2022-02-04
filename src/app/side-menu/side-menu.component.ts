
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  name = 'Angular';
  public isExpanded: boolean = false;

  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  readonly themeAnchor = this.document.getElementById('app-theme');

  constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2,
    private router: Router) {

  }

  public currentRouteName: 'Task Management' | 'Project Management' | 'Home' | undefined;
  ngOnInit(): void {

    let theme = localStorage.getItem('custom-theme');
    if (theme) this.setTheme(theme);
    else
      localStorage.setItem('custom-theme', this.currentTheme);

    this.checkRoute();
  }

  checkRoute() {
    setTimeout(() => {
      let name = this.router.url.split("/")[2];
      if (name == 'task') this.currentRouteName = 'Task Management';
      else if (name == 'project') this.currentRouteName = 'Project Management';
      else if (name == 'home') this.currentRouteName = 'Home';
    }, 200);

  }
  setTheme(source: string) {

    if (source == 'light-theme') {
      this.render.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
      this.currentTheme = 'light-theme';

    } else {
      this.render.setAttribute(this.themeAnchor, 'href', '/dark-theme.css')
      this.currentTheme = 'dark-theme';
    }
    localStorage.setItem('custom-theme', this.currentTheme);
  }

}
