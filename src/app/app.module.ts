import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { BookFlightComponent } from './book-flight/book-flight.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeDetailsComponent,
    BookFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [BookFlightComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
