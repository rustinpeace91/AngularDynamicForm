// import { Injectable } from '@angular/core';

// import { Adapter} from '../utils/adapter';


// Probably want to use adapter patern for this at one point
export class DynamicFormField {
    constructor(
        public key: string, 
        public name: string, 
        public type: string, 
        public refreshRequirementsOnChange: boolean,
        public required: boolean,
        // can be string | null but this causes TypeScript error. 
        public validationRegexp?: any,
        public valuesAllowed?: {name: string, key:string}[] | null
    ){}

}

export class DynamicFormResponse {
    constructor(
        public type: string,
        public title: string,
        public fields: DynamicFormField[],
    ){}
}
