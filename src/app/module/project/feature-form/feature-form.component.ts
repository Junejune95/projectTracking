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

  subFeatures(featureIndex: number): FormArray {
    return this.features().at(featureIndex).get("subFeatures") as FormArray
  }


  newSubFeature(): FormGroup {
    return this.formBuilder.group({
      detail: ['', Validators.required],
    });
  }

  newMainFeature(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      subFeatures: this.formBuilder.array([
        // this.newSubFeature()
      ])
    });
  }

  addMainFeature() {

    this.features().push(this.newMainFeature());
  }

  addSubFeature(mainIndex: number) {
    this.subFeatures(mainIndex).push(this.newSubFeature());
    console.log(mainIndex)
  }


  deleteSubFeature(mainIndex: number, subIndex: number) {
    this.subFeatures(mainIndex).removeAt(subIndex);
  }

  deleteMainFeauture(index: number) {
    this.features().removeAt(index);
  }

}
