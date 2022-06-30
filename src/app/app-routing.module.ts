import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { DetailsColleaguePage } from './pages/details-colleague/details-colleague.page';

const routes: Routes = [
  { path: 'colleagues', component: WelcomePage },
  { path: 'form-template', component: CreateColleaguePage },
  { path: 'form-reactive', component: CreateColleagueReactivePage },
  {
    path: 'colleagues/:pseudo',
    component: DetailsColleaguePage,
    pathMatch: 'full',
  },
  { path: '', pathMatch: 'full', redirectTo: 'colleagues' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
