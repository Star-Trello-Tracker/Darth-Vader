import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent],
  imports: [MainPageRoutingModule, CommonModule],
})
export class MainPageModule {}
