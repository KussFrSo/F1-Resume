import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-race',
	templateUrl: './race.component.html',
	styleUrls: ['./race.component.css'],
})
export class RaceComponent implements OnInit {
	@Input() race: any;
	constructor() {}

	ngOnInit(): void {
		console.log(this.race);
	}
}
