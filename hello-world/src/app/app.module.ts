import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
