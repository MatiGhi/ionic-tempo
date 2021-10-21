import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletaElPedidoPageRoutingModule } from './completa-el-pedido-routing.module';

import { CompletaElPedidoPage } from './completa-el-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletaElPedidoPageRoutingModule
  ],
  declarations: [CompletaElPedidoPage]
})
export class CompletaElPedidoPageModule {}
