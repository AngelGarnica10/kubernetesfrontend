import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderListComponent } from './builder-list.component';

const routes: Routes = [
  { path: '', component: BuilderListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderListRoutingModule { }
