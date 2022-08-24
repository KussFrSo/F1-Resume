import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalendarF1Component } from './calendar-f1/calendar-f1.component';
import { RaceComponent } from './race/race.component';
import { CarouselModule } from 'primeng/carousel';
import { AvatarSliderComponent } from './avatar-slider/avatar-slider.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
	declarations: [
		WelcomeComponent,
		CalendarF1Component,
		RaceComponent,
		AvatarSliderComponent,
		AvatarComponent,
	],
	imports: [CommonModule, CarouselModule, AvatarModule],
	exports: [WelcomeComponent, CalendarF1Component, AvatarSliderComponent],
})
export class PageModule {}
