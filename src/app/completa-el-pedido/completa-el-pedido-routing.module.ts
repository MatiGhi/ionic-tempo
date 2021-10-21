import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletaElPedidoPage } from './completa-el-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CompletaElPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletaElPedidoPageRoutingModule {}
