import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsColleaguePage } from './details-colleague.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DetailsColleaguePage],
  imports: [CommonModule, SharedModule],
  exports: [DetailsColleaguePage],
})
export class DetailsColleagueModule {}
