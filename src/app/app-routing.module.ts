import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  	{ path: '', component: HomeComponent },
	{ path: 'details/:city', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}