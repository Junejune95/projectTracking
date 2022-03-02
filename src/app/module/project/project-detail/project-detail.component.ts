import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  color: ThemePalette = 'accent';

  public projectDetail:Project= {
    projectId: '1',
    name: 'Alechemist Web',
    startDate: '10/1/2022',
    targetEndDate: '10/8/2022',
    budget: 123324234,
    level: 'Init',
    progress:20,
    currentVersion:'version1.1',
    status:'Pending'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
