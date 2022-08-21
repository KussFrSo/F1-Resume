import { Component, OnInit } from '@angular/core';
import { F1ApiService } from '../services/f1-api.service';
import * as xml2js from 'xml2js';
import { Circuit } from '../modules/circuit';

@Component({
	selector: 'app-calendar-f1',
	templateUrl: './calendar-f1.component.html',
	styleUrls: ['./calendar-f1.component.css'],
})
export class CalendarF1Component implements OnInit {
	circuits: any[] = [];

	constructor(private f1Api: F1ApiService) {}

	ngOnInit(): void {
		this.f1Api.getCircuits().subscribe((result: any) => {
			this.circuits = result.MRData.RaceTable.Races;
			console.log(this.circuits);
		});
	}
}
