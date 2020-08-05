import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { CardDetailsPageComponent } from './modules/home/pages/card-details-page/card-details-page.component';
import { SearchComponent } from './modules/home/components/search/search.component';
import { ListComponent } from './modules/home/components/list/list.component';
import { OrderComponent } from './modules/home/components/order/order.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardDetailsPageComponent,
    SearchComponent,
    ListComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
