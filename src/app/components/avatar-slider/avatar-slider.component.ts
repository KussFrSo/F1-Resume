import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/modules/driver';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
	selector: 'app-avatar-slider',
	templateUrl: './avatar-slider.component.html',
	styleUrls: ['./avatar-slider.component.css'],
})
export class AvatarSliderComponent implements OnInit {
	drivers: Driver[] = [];
	constructor(private f1Api: F1ApiService) {}

	ngOnInit(): void {
		this.getDrivers();
	}

	getDrivers() {
		const year = new Date().getFullYear();
		this.f1Api.getDrivers(year).subscribe((result: any) => {
			this.drivers = result.MRData.DriverTable.Drivers;
		});
	}
}
