import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactPageComponent } from './pages/new-contact-page/new-contact-page.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewContactPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
