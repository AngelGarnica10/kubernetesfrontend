import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderListRoutingModule } from './builder-list-routing.module';
import { BuilderListComponent } from './builder-list.component';
import { SpinnerModule } from '@app/shared/indicators';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BuilderListComponent
  ],
  imports: [
    CommonModule,
    BuilderListRoutingModule,

    SpinnerModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class BuilderListModule { }
