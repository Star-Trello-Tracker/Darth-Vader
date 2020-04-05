import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
