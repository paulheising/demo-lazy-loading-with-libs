import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule],
})
export class LazyModule {}
