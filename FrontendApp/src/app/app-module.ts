
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { MasalaChai } from './masala-chai/masala-chai';
import { PlainChai } from './plain-chai/plain-chai';
import { ElaichiChai } from './elaichi-chai/elaichi-chai';
import { GingerChai } from './ginger-chai/ginger-chai';
import { ChaiApp } from './chai-app/chai-app';
import { FormsModule } from '@angular/forms';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';
import { DeleteBook } from './delete-book/delete-book';
import { UpdateBook } from './update-book/update-book';
import { Laptopcomponent } from './laptopcomponent/laptopcomponent';
import { Laptopservice } from './laptopservice/laptopservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Laptopmodule } from './laptopmodule/laptopmodule'

@NgModule({
  declarations: [
    App,
    Red,
    Yellow,
    MasalaChai,
    PlainChai,
    ElaichiChai,
    GingerChai,
    ChaiApp,
    Blue,
    Green,
    Orange,
    Catalog,
    AddBook,
    DeleteBook,
    UpdateBook,
    Laptopcomponent,
    Laptopmodule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
