import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalendarF1Component } from './calendar-f1/calendar-f1.component';
import { RaceComponent } from './race/race.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
	declarations: [WelcomeComponent, CalendarF1Component, RaceComponent],
	imports: [CommonModule, CarouselModule],
	exports: [WelcomeComponent, CalendarF1Component],
})
export class PageModule {}
