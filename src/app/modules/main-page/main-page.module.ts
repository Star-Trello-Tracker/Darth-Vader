import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, LoginComponent],
  imports: [MainPageRoutingModule, CommonModule, FormsModule],
})
export class MainPageModule {}
