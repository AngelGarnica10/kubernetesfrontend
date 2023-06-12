import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@app/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    StoreModule.forFeature('building', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class BuilderModule { }
