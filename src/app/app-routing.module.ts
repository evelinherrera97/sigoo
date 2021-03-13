import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DetailComponent } from './modules/detail/detail.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'detail',
      component: DetailComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
