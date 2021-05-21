import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [],
      phones: this.fb.array([
        this.fb.control(null)
      ])
    })
  }

  addPhone(): void {
    (this.userForm.get('phones') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index:any) {
    (this.userForm.get('phones') as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray> this.userForm.get('phones')).controls
  }

  send(values:any) {
    console.log(values);
  }

}
