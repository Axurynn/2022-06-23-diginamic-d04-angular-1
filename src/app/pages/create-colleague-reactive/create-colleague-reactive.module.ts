import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactivePage } from './create-colleague-reactive.page';

@NgModule({
  declarations: [CreateColleagueReactivePage],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [CreateColleagueReactivePage],
})
export class CreateColleagueReactiveModule {}
