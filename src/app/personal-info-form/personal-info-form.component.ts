import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent extends DynamicFormComponent implements OnInit {
  constructor(
    service: FormDataService
  ){
    super(service)
  }
  
  getAPIData() {
    this.service.getAccountRequirements().subscribe(data => {
      this.APIData = data;
    })
  }

  ngOnInit(): void {
    this.getAPIData()
  }
}
