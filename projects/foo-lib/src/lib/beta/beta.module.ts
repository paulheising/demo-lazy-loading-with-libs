import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BetaComponent } from './beta.component';

@NgModule({
  declarations: [BetaComponent],
  imports: [CommonModule],
  exports: [BetaComponent],
})
export class BetaModule {}
