import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components';
import { DashboardComponent } from '@shared/components';

const routes: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
