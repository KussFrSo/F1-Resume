import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarF1Component } from './calendar-f1.component';

describe('CalendarF1Component', () => {
	let component: CalendarF1Component;
	let fixture: ComponentFixture<CalendarF1Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CalendarF1Component],
		}).compileComponents();

		fixture = TestBed.createComponent(CalendarF1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
