import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  cards = [];
  @Input() term: string;

  spinner = true;

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {

    this.homeService.getListCards().subscribe(
      response => {
        this.spinner = false;
        Object.assign(this.cards, response.cards);
        this.cards.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
      }
    );

  }


}