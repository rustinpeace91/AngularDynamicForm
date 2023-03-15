# DynamicFormExample

This is an example of an Angular app that takes in dynamic JSON data from an API that determines which type of form fields to display in the front end, as well as validators, requirements, and selection options.  Almost nothing about the display and state of the form fields are hardcoded. The only assumption is the formating and structure of the API data itself. 

The solution here utilizes one component that consumes the data and stores it in an object, then impliments a handler method to build the form which it then passes to a child component which impliments how the fields are displayed. It's not a perfect solution.  There are a lot of what appear to be uncessary objects to keep track of the JSON data and state changes. An alternative would be to build each field into it's own FormGroup object, but in that case, only one formControl would be used as an input, where as the rest would be used to determine how the form is displayed, which to me felt like an incorrect use for the FormGroup object.

The dummy data is based off of this public API: https://sandbox.transferwise.tech/dynamic-forms-ui/v1
Although I simplified the structure a bit.  

This repo is basically an Angular 15 version of: https://github.com/isaaclubanko/angular6dynamicform (my other GitHub account) 
which is simplified a bit. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
