import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HeaderData {
  title: string;
  icon: string;
}


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerData = new BehaviorSubject<HeaderData>({
    title: "Dashboard",
    icon: "dashboard",
  });

  currentHeaderData = this.headerData.asObservable();

  constructor() { }

  updateHeader(headerData: HeaderData) {
    this.headerData.next(headerData);
  }
}
