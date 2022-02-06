import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-page-header',
  templateUrl: './component-page-header.component.html',
  styleUrls: ['./component-page-header.component.scss']
})
export class ComponentPageHeaderComponent implements OnInit {
  @Input()
  componentName:string | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreate(){
    console.log(this.router.url);
    this.router.navigate([this.router.url,'create'])
  }
}
