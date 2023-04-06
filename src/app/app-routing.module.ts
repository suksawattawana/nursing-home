import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/content/home/home.component';
import { CenterprincipleComponent } from './component/content/centerprinciple/centerprinciple.component';
import { ServicerateComponent } from './component/content/servicerate/servicerate.component';
import { SymptomreportComponent } from './component/content/symptomreport/symptomreport.component';


const routes: Routes = [
  { path: 'rout-home', component: HomeComponent },
  { path: 'rout-centerprinciple', component: CenterprincipleComponent },
  { path: 'rout-servicerate', component: ServicerateComponent },
  { path: 'rout-symptomreport', component: SymptomreportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
