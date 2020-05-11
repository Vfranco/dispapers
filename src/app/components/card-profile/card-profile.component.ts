import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-profile',
	templateUrl: './card-profile.component.html',
	styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {

	@Input() customerClient : string;
	@Input() category : string;
	@Input() btnName : string;

	constructor() { }

	ngOnInit(): void {
	}

}
