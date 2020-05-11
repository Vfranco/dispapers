import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

@NgModule({
	declarations: [CardProfileComponent, FormWizardComponent],
	imports: [
		CommonModule
	],
	exports: [CardProfileComponent, FormWizardComponent]
})
export class ComponentsModule { }
