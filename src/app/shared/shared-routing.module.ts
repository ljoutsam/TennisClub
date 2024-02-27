import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulesComponent } from './components/tarif/formules.component';

const routes: Routes = [{path: 'formules', component: FormulesComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
