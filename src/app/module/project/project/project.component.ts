import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Project } from 'app/module/project/interfaces/project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  color: ThemePalette = 'accent';
  panelOpenState = false;

  projects: Project[] = [
    {
      projectId: '1',
      name: 'Alechemist Web',
      startDate: '10/1/2022',
      targetEndDate: '10/8/2022',
      budget: 123324234,
      level: 'Init',
      progress:20,
      currentVersion:'version1.1',
      
    },
    {
      projectId: '2',
      name: 'Gym Management',
      startDate: '10/1/2022',
      targetEndDate: '10/8/2022',
      budget: 123324234,
      level: 'Init',
      progress:80,
      currentVersion:'version1.2',
    },
    {
      projectId: '3',
      name: 'Booking',
      startDate: '10/1/2022',
      targetEndDate: '10/8/2022',
      budget: 123324234,
      level: 'Init',
      progress:100,
      currentVersion:'version1.2',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
