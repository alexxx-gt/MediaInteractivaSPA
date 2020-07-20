import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAnimalComponent } from './views/employee-animal/employee-animal.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: EmployeeAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
