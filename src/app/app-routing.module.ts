import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { MessengerPageComponent } from './pages/messenger-page/messenger-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'messenger', component: MessengerPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
