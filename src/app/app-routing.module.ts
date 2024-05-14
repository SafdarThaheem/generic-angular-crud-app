import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'newUser', component: NewUserComponent },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./components/edit/edit.module').then(
        (module) => module.EditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
