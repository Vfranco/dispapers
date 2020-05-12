import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormCardComponent } from './form-card/form-card.component';
import { PriceRangeComponent } from './price-range/price-range.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
	declarations: [CardProfileComponent, FormWizardComponent, FormInputsComponent, FormCardComponent, PriceRangeComponent, PaginationComponent],
	imports: [
		CommonModule
	],
	exports: [CardProfileComponent, FormWizardComponent, FormInputsComponent, FormCardComponent, PriceRangeComponent, PaginationComponent]
})
export class ComponentsModule { }
