import { Component, OnInit } from '@angular/core';
import {Flight} from './flight';
import {HomeDetailsComponent} from '../home-details/home-details.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  destinations = ['Seoul', 'Dubai',
    'Berlin', 'Istanbul'];

  airports = ['Nairobi', 'Kisumu',
    'Mombasa', 'Eldoret'];

  model = new Flight(18, this.airports[0], this.destinations[0], 1, new Date() );

  submitted = false;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }
  blankForm() {
    this.model = new Flight(42, '', '', 0, new Date());
  }

  ngOnInit() {
  }

}
