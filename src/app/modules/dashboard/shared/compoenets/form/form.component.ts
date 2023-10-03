import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // @Input() form?: FormGroup;

  modelForm?: FormGroup
  controlNames?: string[]
  @Input() model?: any
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getAttributeNames();
    console.log(this.controlNames)
  }

  prepareData() {

  }
  getAttributeNames() {
    this.controlNames = Object.keys(this.model);
    //console.log(this.controlNames)
  }
  

}
