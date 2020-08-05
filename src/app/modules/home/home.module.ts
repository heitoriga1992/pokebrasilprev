import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardDetailsPageComponent } from './pages/card-details-page/card-details-page.component';
import { ListComponent } from './components/list/list.component';
import { OrderComponent } from './components/order/order.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [
    HomePageComponent,
    CardDetailsPageComponent,
    ListComponent,
    OrderComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ButtonsModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }

