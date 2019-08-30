import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogDemo} from './confirmdialogdemo';
import {ConfirmDialogDemoRoutingModule} from './confirmdialogdemo-routing.module';
import {ConfirmDialogModule} from '../../../components/confirmdialog/confirmdialog';
import {ButtonModule} from '../../../components/button/button';
import {MessagesModule} from '../../../components/messages/messages';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';
import { RadioButtonModule } from '../../../components/radiobutton/radiobutton';
import { CheckboxModule } from '../../../components/checkbox/checkbox';

@NgModule({
	imports: [
		CommonModule,
		ConfirmDialogDemoRoutingModule,
        ConfirmDialogModule,
		ButtonModule,
		RadioButtonModule,
		CheckboxModule,
        MessagesModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ConfirmDialogDemo
	]
})
export class ConfirmDialogDemoModule {}
