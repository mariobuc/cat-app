import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedSelectorComponent } from './features/breeds/components/breed-selector/breed-selector.component';
import { BreedDetailComponent } from './features/breeds/components/breed-detail/breed-detail.component';

const routes: Routes = [
  { path: 'breeds', component: BreedSelectorComponent },
  { path: 'breed/:id', component: BreedDetailComponent },
  { path: '', redirectTo: '/breeds', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
