import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Observable } from 'rxjs';
import { CardsDetailModel } from '../../models/card-details.model';


@Component({
  selector: 'app-card-details-page',
  templateUrl: './card-details-page.component.html',
  styleUrls: ['./card-details-page.component.scss']
})
export class CardDetailsPageComponent implements OnInit {
  spinner: boolean;

  id: string;
  sub: any;
  detailsCard: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.getDetailsCard();
  }

   getDetailsCard() {
    this.homeService.getCard(this.id).subscribe(
      async response => {
        this.spinner =  false;
        this.detailsCard = await response;
        console.log(this.detailsCard);
      }
    );
  }
}
