import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { BreedSelectorComponent } from './features/breeds/components/breed-selector/breed-selector.component';
import { BreedDetailComponent } from './features/breeds/components/breed-detail/breed-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'breeds', component: BreedSelectorComponent },
  { path: 'breed/:id', component: BreedDetailComponent },
  { path: '', redirectTo: '/breeds', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
