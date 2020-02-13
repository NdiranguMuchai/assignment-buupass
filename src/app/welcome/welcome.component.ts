import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeTitle = 'Buupass';
  catchphrase = 'Book flight with convenience';
  videoLink = 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4';
  constructor() { }

  ngOnInit() {
  }

}
