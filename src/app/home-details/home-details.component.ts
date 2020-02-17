import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {BookFlightComponent} from '../book-flight/book-flight.component';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  bookFlight() {
    console.log('book flight');
    const d = this.dialog.open(BookFlightComponent, {
      width: '800px',
    });
  }
}
