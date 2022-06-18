import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeVaxComponent } from './home-vax/home-vax.component';
import { SumVaxComponent } from './sum-vax/sum-vax.component';
import { VaxRegStateComponent } from './vax-reg-state/vax-reg-state.component';
import { VaxRegComponent } from './vax-reg/vax-reg.component';
import { VaxStateComponent } from './vax-state/vax-state.component';

const routes: Routes = [
  {path: '', component: HomeVaxComponent},
  {path: 'vaxreg', component: VaxRegComponent},
  {path: 'vaxstate', component: VaxStateComponent},
  {path: 'vaxregbystate', component: VaxRegStateComponent},
  {path: 'sumvax', component: SumVaxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VaxRegComponent, VaxStateComponent];
