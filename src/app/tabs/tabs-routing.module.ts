import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { TokenGuard } from './../services/token.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'pedir',
        loadChildren: () => import('../pedir/pedir.module').then( m => m.PedirPageModule),
        canActivate: [TokenGuard]
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares.module').then( m => m.LugaresPageModule),
        canActivate: [TokenGuard]
      },
      {
        path: 'social',
        loadChildren: () => import('../social/social.module').then( m => m.SocialPageModule),
        canActivate: [TokenGuard]
      },
      {
        path: '',
        redirectTo: 'home/pedir',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/pedir',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
