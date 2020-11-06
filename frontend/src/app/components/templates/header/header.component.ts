import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icon: string;
  title: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.currentHeaderData.subscribe(headerData => {
      this.icon = headerData.icon;
      this.title = headerData.title;
    })
  }

}
