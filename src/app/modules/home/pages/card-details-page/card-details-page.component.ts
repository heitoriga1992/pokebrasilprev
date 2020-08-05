import { Component, OnInit } from '@angular/core';
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

  id: string;
  sub: any;
  spinner: boolean = true;

  detailsCard;


  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.homeService.getCard(this.id).subscribe(
      response => {
        this.spinner = false;
        this.detailsCard = response;
        console.log(this.detailsCard);
      }
    );
  }
}
