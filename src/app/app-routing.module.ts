import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeVaxComponent } from './home-vax/home-vax.component';
import { VaxRegComponent } from './vax-reg/vax-reg.component';
import { VaxStateComponent } from './vax-state/vax-state.component';

const routes: Routes = [
  {path: '', component: HomeVaxComponent},
  {path: 'vaxreg', component: VaxRegComponent},
  {path: 'vaxstate', component: VaxStateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VaxRegComponent, VaxStateComponent];
