import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./pages/builder-new/builder-new.module').then( m => m.BuilderNewModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/builder-list/builder-list.module').then( m => m.BuilderListModule),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
