import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { RecComponent } from './rec/rec.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rec', component: RecComponent },
  { path: 'price', component: PriceComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    RecComponent,
    TestComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
