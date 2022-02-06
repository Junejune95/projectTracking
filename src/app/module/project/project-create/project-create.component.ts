import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  projectForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.email]],
    startDate: ["", [Validators.required]],
    targetEndDate: ["", [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
