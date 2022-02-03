
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  name = 'Angular';
  public isExpanded: boolean = false;
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  readonly themeAnchor = this.document.getElementById('app-theme');

  constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2) {

  }
  ngOnInit(): void {
    let theme = localStorage.getItem('custom-theme');
    if (theme) this.setTheme(theme);
    else
      localStorage.setItem('custom-theme', this.currentTheme);
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
