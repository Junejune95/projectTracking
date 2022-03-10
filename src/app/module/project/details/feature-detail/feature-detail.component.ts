import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/project';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss']
})
export class FeatureDetailComponent implements OnInit {
  public feautres: Array<Feature> = [
    {
      name: 'Login',
      note:'Do not allow user create by userself.',
      status:'Pending',
      subFeatures: [
        {
          name: 'google or facebook ',
          status:'Done'
        },
        {
          name: 'email or phone number and password.',
          status:'BugFix'

        },
        {
          name: 'Password max length 8 and special char must be included',
          status:'Testing'

        },
        {
          name: 'Forget Password.If you make forget password system need to add security code.',
          status:'Pending'

        },
      ]
    },
    {
      name: 'User',
      note:'Role: admin and user.Label: name,role,date of birth,education and decription.Role: admin and user.Label: name,role,date of birth,education and decription',
      status:'None',
      subFeatures: [
        {
          name: 'Create',
          status:'None'
        },
        {
          name: 'Edit',
          status:'None'

        },
        {
          name: 'delete',
          status:'None'
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
