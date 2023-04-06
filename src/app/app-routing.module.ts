import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/content/home/home.component';
import { CenterprincipleComponent } from './component/content/centerprinciple/centerprinciple.component';
import { ServicerateComponent } from './component/content/servicerate/servicerate.component';
import { SymptomreportComponent } from './component/content/symptomreport/symptomreport.component';
import { OnlinebookingComponent } from './component/content/onlinebooking/onlinebooking.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centerprinciple', component: CenterprincipleComponent },
  { path: 'servicerate', component: ServicerateComponent },
  { path: 'onlinebooking', component: OnlinebookingComponent },
  { path: 'symptomreport', component: SymptomreportComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
