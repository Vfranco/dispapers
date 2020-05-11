import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

@NgModule({
	declarations: [LoginComponent, BoardComponent],
	imports: [		
		CommonModule,
		LayoutModule
	],
	exports : [BoardComponent]
})
export class HomeModule { }
