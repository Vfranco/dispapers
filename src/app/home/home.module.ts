import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	declarations: [LoginComponent, BoardComponent],
	imports: [		
		CommonModule,
		LayoutModule,
		ComponentsModule
	],
	exports : [BoardComponent]
})
export class HomeModule { }
