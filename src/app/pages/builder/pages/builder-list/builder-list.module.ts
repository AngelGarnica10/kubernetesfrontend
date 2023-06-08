import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderListRoutingModule } from './builder-list-routing.module';
import { BuilderListComponent } from './builder-list.component';


@NgModule({
  declarations: [
    BuilderListComponent
  ],
  imports: [
    CommonModule,
    BuilderListRoutingModule
  ]
})
export class BuilderListModule { }
