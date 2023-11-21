import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users',
  },
  {
    path: 'users',
    loadChildren: () => import('src/app/components/users/users.module').then((m) => m.UsersModule),
    pathMatch: 'prefix'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
