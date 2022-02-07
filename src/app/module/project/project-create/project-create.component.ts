import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  mainFeatureForm:FormGroup=this.formBuilder.group({
    features: this.formBuilder.array([])
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
