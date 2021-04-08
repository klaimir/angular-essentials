# SUMMARY

## Components and Databinding

## Directives

## Services and Dependency Injection

## Routing

## Observables

## Form

## Pipes

## Http

## Authentication

## Optimization and NgModules

## Deployment

## Animations and Testing

## Bonus Track




# Project notes

We are going to writting all relevant additional notes for the project. This project contains concept explanations and exercises for angular understanding.

# Section 1: Getting Started

## Installing bootstrap

1. npm install --save bootstrap@3 (With this we indicate the version one, even though we´re going to install the 4 version according to snippets plugin installed in VSC)
2. In angular.json file add the css style path 'node_modules/bootstrap/dist/css/bootstrap.min.css'
3. In sources in dev web tool we can see the style code loaded but sometimes it´s necessary to recompiling the project to apply the changes.

## Others considerations

One important note: All the course code will only work if you are NOT using "strict mode" see the "First App" lecture in this module. Strict mode forces you to write more verbose code in some places (especially when it comes to class properties). If you enabled it by accident, you can also disable it by setting strict: false in your tsconfig.json file.

# Section 2: The Basics

- Explanation of the different parts of a component.
- ng g c server (To create a component).

## Components and Databinding

- Explain component structure.
- Explain component communications in binding.

### String Interpolation

{{ 'Server' }} => It´s possible to use ternary operator or whatever expression.

### Property binding vs String Interpolation

!Never mix both! they are known for using them separated.

### Bindable Properties and Events

How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log() the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties or YOUR_ELEMENT events should yield nice results.

### Two-Way-Binding!

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.

You then also need to add the import from @angular/forms in the app.module.ts file:

import { FormsModule } from '@angular/forms';

### Ejercicio 2

<ol>
  <li>Add a Input field which updates a property ('username') via Two-Way-Binding</li>
  <li>Output the username property via String Interpolation (in a paragraph below the input)</li>
  <li>Add a button which may only be clicked if the username is NOT an empty string</li>
  <li>Upon clicking the button, the username should be reset to an empty string</li>
</ol>

When first approach, value of username input text is not updated where reset input button is clicked.

## Directives

### Introduction

Directive are introductions in the DOM. We can use, built in or custom.

### ngIf

### ngIf with else

### Styling Elements Dynamically with ngStyle

It´s super important to understand that property binding in Directives is not the same to regular property binding. It´s only indicate
that a directive will be used in that element not the attribute itself to bind.
You can use the attribute notation or CamelCase notation to specify the attribute inside the directive.

[ngStyle]="{atribute: value}"

### Applying CSS Classes Dynamically with ngClass

[ngClass]="{cssClass: expression}". cssClass, is the CSS class to apply and expresion is a boolean form required to the css Class is applied.

### Outputting List with ngFor

### Task 3: Practicing Directives

<ol>
  <li>Add A button which says 'Display Details'</li>
  <li>Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')</li>
  <li>Toggle the displaying of that paragraph with the button created in the first step</li>
  <li>Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)</li>
  <li>Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)</li>
</ol>

### Getting the Index when using ngFor


# Section 4: Debugging

- Show errors by console.
- Debugging code by source map establishing breakpoint to debugging in runtime.
- Angular augury


# Section 5: Components & Databinding Deep Dive

## Splitting Apps into Components

## Property & Event Binding Overview

## Binding to Custom Properties

## Assigning an Alias to Custom Properties

## Binding to Custom Events

## Assigning an Alias to Custom Events

## Custom Property and Event Binding Summary

Input/Output approach is perfect valid if there no much distance beetween components. Else, Services are one option more practical.

## Understanding View Encapsulation

Explanation about scope of css style file in the project and shadow DOM.

