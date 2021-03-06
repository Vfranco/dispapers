import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';

@NgModule({
	declarations: [LoginComponent, RegisterComponent, RecoveryComponent],
	imports: [
		CommonModule
	],
	exports: [LoginComponent, RegisterComponent, RecoveryComponent]
})
export class AuthModule { }
