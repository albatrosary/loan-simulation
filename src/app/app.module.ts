import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomMaterialModule } from './custom-material/custom-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';

import { ArithmeticService } from './arithmetic.service';
import { ItemComponent } from './item/item.component';
import { ItemHeadComponent } from './item/item-head.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemHeadComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ArithmeticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
