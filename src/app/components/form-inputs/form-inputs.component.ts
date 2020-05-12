import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-form-inputs',
	templateUrl: './form-inputs.component.html',
	styleUrls: ['./form-inputs.component.scss']
})
export class FormInputsComponent implements OnInit {

	@Input() title :string;

	constructor() { }

	ngOnInit(): void {
	}

}
