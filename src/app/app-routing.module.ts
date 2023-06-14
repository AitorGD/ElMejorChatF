import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { CanActivateViaAuthGuard } from './canActivateViaAuthGuard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  {path: 'chat', loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
