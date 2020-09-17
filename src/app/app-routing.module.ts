import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorldFieldComponent} from './world-field/world-field.component';

const routes: Routes = [
  {path: '', component: WorldFieldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
