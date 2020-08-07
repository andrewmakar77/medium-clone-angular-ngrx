import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { TabsModule } from 'src/app/modules/shared/modules/tabs/tabs.module';
import { TagsModule } from 'src/app/modules/tags/tags.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TabsModule, TagsModule],
})
export class HomeModule {}
