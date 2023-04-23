import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CustomPipesPipe } from './custom-pipes/custom-pipes.pipe';


@NgModule({
  declarations: [
    InbuiltPipesComponent,
    CustomPipesComponent,
    CustomPipesPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
