import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule, DashboardModule],
})
export class UserModule {}
