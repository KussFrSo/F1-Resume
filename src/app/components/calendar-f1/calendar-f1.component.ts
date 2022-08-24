import { Component, OnInit } from '@angular/core';
import { F1ApiService } from '../../services/f1-api.service';
import * as xml2js from 'xml2js';
import { Circuit } from '../../modules/circuit';
import { last } from 'rxjs';

@Component({
	selector: 'app-calendar-f1',
	templateUrl: './calendar-f1.component.html',
	styleUrls: ['./calendar-f1.component.css'],
})
export class CalendarF1Component implements OnInit {
	circuits: any[] = [];
	nextRace: number = 0;

	constructor(private f1Api: F1ApiService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.f1Api.getCircuits().subscribe((result: any) => {
				this.circuits = result.MRData.RaceTable.Races;
				this.getLastRace(this.circuits);
			});
		});
	}

	// Funcion dado un circuito me devuelve el circuito a 3 posicones suyas, para el carrousel 2 row
	getCicuit(circuit: any) {
		return this.circuits.filter(
			x => Number(x.round) === Number(circuit.round) + 3
		)[0];
	}

	getLastRace(circuits: any) {
		this.f1Api.getLastRace().subscribe((result: any) => {
			const lastRace = Number(result.MRData.RaceTable.round);
			this.nextRace = lastRace === circuits.length ? 0 : lastRace + 1;
		});
	}
}
