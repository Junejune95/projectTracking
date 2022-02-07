import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {

  @Input() basicInfoForm: FormGroup | undefined;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnChanges() {
    this.ref.detectChanges()
  }


  ngOnInit(): void {
  }

}
