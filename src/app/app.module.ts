import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponentComponent } from './shared/components/menu-component/menu-component.component';

@NgModule({
  declarations: [AppComponent, MenuComponentComponent],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
