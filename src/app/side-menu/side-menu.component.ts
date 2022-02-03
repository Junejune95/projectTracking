
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
export class SideMenuComponent {
  name = 'Angular';
  public isExpanded:boolean=false;
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
