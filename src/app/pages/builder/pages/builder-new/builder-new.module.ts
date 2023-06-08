import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderNewRoutingModule } from './builder-new-routing.module';
import { BuilderNewComponent } from './builder-new.component';


@NgModule({
  declarations: [
    BuilderNewComponent
  ],
  imports: [
    CommonModule,
    BuilderNewRoutingModule
  ]
})
export class BuilderNewModule { }
