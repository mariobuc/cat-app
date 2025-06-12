import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'; 

const routes: Routes = [
  { path: '', redirectTo: 'breeds', pathMatch: 'full' },
  { path: 'breeds', loadChildren: () => import('./features/breeds/breeds.module').then(m => m.BreedsModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'breeds' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // <-- Asegúrate de tener esto
})
export class AppRoutingModule {}
