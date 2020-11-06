import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService, HeaderData } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-books-crud',
  templateUrl: './books-crud.component.html',
  styleUrls: ['./books-crud.component.css']
})
export class BooksCrudComponent implements OnInit {

  headerData: HeaderData = {
    icon: "books",
    title: "Book List",
  };

  constructor(private route: Router,
              private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.updateHeader(this.headerData);
  }

  navigateToBookCreation(): void {
    this.route.navigate(['book/add']);
  }

}
