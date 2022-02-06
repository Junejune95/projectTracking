import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  
  secondFormGroup: FormGroup=this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  projectForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    targetEndDate: ["", [Validators.required]],
    budget: [0, [Validators.required]],
    note: [""],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
