import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundsPageRoutingModule } from './sounds-routing.module';

import { SoundsPage } from './sounds.page';
import { SoundElementComponent } from '../components/sound-element/sound-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoundsPageRoutingModule,

  ],
  declarations: [SoundsPage, SoundElementComponent]
})
export class SoundsPageModule {}
