import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import {MatButtonModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import { BookFlightComponent } from './book-flight/book-flight.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {JwSocialButtonsModule} from 'jw-angular-social-buttons';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeDetailsComponent,
    BookFlightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    AngularFontAwesomeModule,
    JwSocialButtonsModule
  ],
  entryComponents: [BookFlightComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
