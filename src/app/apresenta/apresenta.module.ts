import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApresentaPageRoutingModule } from './apresenta-routing.module';

import { ApresentaPage } from './apresenta.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApresentaPageRoutingModule
  ],
  declarations: [ApresentaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApresentaPageModule {}
