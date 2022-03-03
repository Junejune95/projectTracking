import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/project';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss']
})
export class FeatureDetailComponent implements OnInit {
  public feautre: Array<Feature> = [
    {
      featureId: '1',
      name: 'Login',
      subFeatures: [
        {
          detail: 'User login include google or facebook or email and password login included.'
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
