import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionLugarPageRoutingModule } from './informacion-lugar-routing.module';

import { InformacionLugarPage } from './informacion-lugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionLugarPageRoutingModule
  ],
  declarations: [InformacionLugarPage]
})
export class InformacionLugarPageModule {}
