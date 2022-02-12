import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.scss']
})
export class FeatureFormComponent implements OnInit {
   subFeaturesForm = this.formBuilder.group({
    name: ['', Validators.required],
    subFeatures: this.formBuilder.array([])
  });

  @Input() mainFeatureForm: FormGroup = this.formBuilder.group({});

  constructor(private ref: ChangeDetectorRef, private formBuilder: FormBuilder) {

  }


  ngOnChanges() {
    this.ref.detectChanges()
  }

  ngOnInit(): void {
    this.addMainFeature();

  }



  features(): FormArray {
    return this.mainFeatureForm.get("features") as FormArray
  }

  subFeatures(featureIndex:number) : FormArray {
    return this.features().at(featureIndex).get("subFeatures") as FormArray
  }


  newSubFeature(): FormGroup {
    return this.formBuilder.group({
      detail: ['', Validators.required],
    });
  }

  addSubFeature(mainIndex:number) {
    this.subFeatures(mainIndex).push(this.newSubFeature());
    console.log(mainIndex)
  }

 

  addMainFeature() {
    let sub=this.formBuilder.group({
      name: ['', Validators.required],
      subFeatures: this.formBuilder.array([])
    });
  
    this.features().push(sub);
  }


  deleteLesson(lessonIndex: number) {
    // this.subFeatures.removeAt(lessonIndex);
  }
}
