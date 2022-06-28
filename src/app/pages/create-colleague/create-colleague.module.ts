import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateColleaguePage],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CreateColleaguePage],
})
export class CreateColleagueModule {}
