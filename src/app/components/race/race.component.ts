import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-race',
	templateUrl: './race.component.html',
	styleUrls: ['./race.component.css'],
})
export class RaceComponent {
	@Input() race: any;
	@Input() nextRace: number = 0;
	constructor() {}
}
