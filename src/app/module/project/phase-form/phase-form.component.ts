import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.scss']
})
export class PhaseFormComponent implements OnInit,OnChanges {
  @Input()
  phaseForm:FormGroup =this.fb.group({});;
  
  @Input()
  featureList:any;


  constructor(public fb:FormBuilder) { }


  ngOnInit(): void {
    this.addPhase();
  }

  newPhase(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      startDate:['',Validators.required],
      developmentEndDate:['',Validators.required],
      testingStartDate:['',Validators.required],
      testingEndDate:['',Validators.required],
      releaseDate:['',Validators.required],
      amount:[0,Validators.required],
      receiveDate:[0],
      features: this.fb.array([])
    });
  }

  phases(): FormArray {
    return this.phaseForm.get("phases") as FormArray
  }

  addPhase() {
    this.phases().push(this.newPhase());
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.featureList)
  }
}
