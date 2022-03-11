import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required,Validators.email]],
    phoneNumber: ["", [Validators.required]],
    companyInfo:this.fb.group({
      companyName: [""],
      phonenumber:[""],
      address: [""],
    }),
    gender: [""],
    dateOfBirth: [""],
    note: [""],
 
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onUserSave(){
    console.log(this.userForm.value)
  }

}
