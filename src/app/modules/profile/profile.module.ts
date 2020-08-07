import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from 'src/app/modules/profile/profile-routing.module';
import { ProfileComponent } from 'src/app/modules/profile/components/profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
