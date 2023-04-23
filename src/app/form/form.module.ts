import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
   
  ]
})
export class FormModule { }
