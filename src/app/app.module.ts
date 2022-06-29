import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { FirstLastValidatorDirective } from './shared/validators/first-last-validator.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, WelcomeModule, CreateColleagueModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
