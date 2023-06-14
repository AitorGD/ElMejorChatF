import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../canActivateViaAuthGuard';
import { ChatComponent } from './chat.component';
const routes: Routes = [
  {path: 'chat', component: ChatComponent, canActivate: [CanActivateViaAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule { }