import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/modules/driver';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
	@Input() avatar: Driver = new Driver();
	constructor() {}

	ngOnInit(): void {
		console.log(this.avatar);
	}
}
