import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ItemModule } from './item/item.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
