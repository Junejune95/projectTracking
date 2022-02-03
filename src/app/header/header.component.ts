import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { StyleManagerService } from '../core/services/style-manager.service';
import { Option } from "../core/interfaces/option.model";
import { DOCUMENT } from '@angular/common';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  readonly themeAnchor=this.document.getElementById('app-theme');

  constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2) {

  }
  
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}

  setTheme({ source }: MatSelectChange) {
    if (source.value == 'light') {
     this.render.setAttribute(this.themeAnchor,'href','/light-theme.css')
    } else {
      this.render.setAttribute(this.themeAnchor,'href','/dark-theme.css')

    }
  }
}
