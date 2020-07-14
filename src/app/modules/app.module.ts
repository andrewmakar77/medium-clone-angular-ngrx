import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'src/app/modules/app.component';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { TranslationModule } from 'src/app/modules/translation/translation.module';
import { AppStore } from 'src/app/modules/store/app-store.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    TranslationModule,
    AppStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
