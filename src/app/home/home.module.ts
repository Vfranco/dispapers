import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

@NgModule({
	declarations: [LoginComponent, BoardComponent],
	imports: [
		CommonModule
	]
})
export class HomeModule { }
