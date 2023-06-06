import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewControllerService {

  favouriteView: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  changeView(changeView:boolean){
    this.favouriteView.next(changeView);
  }
}
