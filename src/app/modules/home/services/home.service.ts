import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/service/http.service';
import { Observable } from 'rxjs';
import { CardsDetailModel } from '../models/card-details.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpService
  ) {
  }

  getListCards(): Observable<CardsDetailModel> {
    return this.http.get<CardsDetailModel>(`/cards`);
  }
  
  getCard(id) {
    return this.http.get(`/cards/${id}`);
  }

}
