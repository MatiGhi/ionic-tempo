import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'followers',
    loadChildren: () => import('./followers/followers.module').then( m => m.FollowersPageModule)
  },
  {
    path: 'informacion-lugar',
    loadChildren: () => import('./informacion-lugar/informacion-lugar.module').then( m => m.InformacionLugarPageModule)
  },
  {
    path: 'mis-pedidos',
    loadChildren: () => import('./mis-pedidos/mis-pedidos.module').then( m => m.MisPedidosPageModule)
  },
  {
    path: 'detalle-pedido',
    loadChildren: () => import('./detalle-pedido/detalle-pedido.module').then( m => m.DetallePedidoPageModule)
  },
  {
    path: 'detalle-lugar',
    loadChildren: () => import('./detalle-lugar/detalle-lugar.module').then( m => m.DetalleLugarPageModule)
  },
  {
    path: 'completa-el-pedido',
    loadChildren: () => import('./completa-el-pedido/completa-el-pedido.module').then( m => m.CompletaElPedidoPageModule)
  },
  {
    path: 'resumen-compra',
    loadChildren: () => import('./resumen-compra/resumen-compra.module').then( m => m.ResumenCompraPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
