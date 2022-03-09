import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlphaComponent } from './alpha.component';

@NgModule({
  declarations: [AlphaComponent],
  imports: [CommonModule],
  exports: [AlphaComponent],
})
export class AlphaModule {}
