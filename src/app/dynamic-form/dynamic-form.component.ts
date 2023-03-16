import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DynamicFormField, DynamicFormResponse } from '../models/dynamic-form.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {

  public APIData: DynamicFormResponse[] = [];

  public selectedFormData: DynamicFormResponse = {
    type: '',
    title: '',
    fields: []
  }

  public form = new FormGroup({})

  public selectedFormOption = new FormControl("--")

  public fieldsReady: boolean = false;

  constructor(
    protected service: FormDataService 
  ){}

  updateFormOption(): void {
    if(this.selectedFormOption.value !== '--' && this.selectedFormOption){
      // clear form when the select box is changed
      this.selectedFormData = new DynamicFormResponse('', '', []);
      this.form = new FormGroup({});
      this.APIData.forEach(fullForm => {
        if(fullForm.type === this.selectedFormOption.value){
          this.selectedFormData = fullForm
          this.selectedFormData.fields.forEach(f =>{
            console.log(f.validationRegexp)
            let validator = f.validationRegexp !== null ? Validators.pattern(f.validationRegexp): Validators.pattern("")
            this.form.addControl(f.key,
              new FormControl('', [Validators.required, validator])
            )
          })
        }
      })
      this.fieldsReady = true
    }
  }

  printSelectedForm(): void{
    console.log(this.form)
  }


  
}
