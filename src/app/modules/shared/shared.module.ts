import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';

@NgModule({
  declarations: [ProfileLayoutComponent],
  exports: [ProfileLayoutComponent],
  imports: [CommonModule],
})
export class SharedModule {}
