import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DynamicFormResponse } from './models/dynamic-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  url: string = `http://localhost:3000/account-requirements`
  constructor(
    private http: HttpClient
  ) { }


  getAccountRequirements(): Observable<any>  {
    return this.http.get(
      this.url
    )
  }
}
