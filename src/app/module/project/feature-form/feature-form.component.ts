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


  get features() {
    return this.mainFeatureForm.controls["features"] as FormArray;
  }

  get subFeatures() {
    return this.subFeaturesForm.controls["subFeatures"] as FormArray;
  }

  addSubFeature() {
    const subFeatures = this.formBuilder.group({
      detail: ['', Validators.required],
    });
    this.subFeatures.push(subFeatures);
    console.log(this.mainFeatureForm.value)
  }

  addMainFeature() {
  

    this.features.push(this.subFeaturesForm);

  }


  deleteLesson(lessonIndex: number) {
    this.subFeatures.removeAt(lessonIndex);
  }
}
