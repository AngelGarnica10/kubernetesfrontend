import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderNewComponent } from './builder-new.component';

const routes: Routes = [
  { path: '', component: BuilderNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderNewRoutingModule { }
