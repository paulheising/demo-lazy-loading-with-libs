import { BetaModule } from 'foo-lib';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, BetaModule],
})
export class LazyModule {}
