import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalendarF1Component } from './calendar-f1/calendar-f1.component';
import { HttpClientModule } from '@angular/common/http';
import { F1ApiService } from './services/f1-api.service';
import { RaceComponent } from './race/race.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [WelcomeComponent, CalendarF1Component, RaceComponent],
	imports: [BrowserModule, HttpClientModule, NgbModule],
	providers: [F1ApiService],
	bootstrap: [WelcomeComponent, CalendarF1Component],
})
export class AppModule {}
