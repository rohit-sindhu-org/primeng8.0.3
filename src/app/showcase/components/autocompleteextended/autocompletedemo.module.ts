import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {AutoCompleteExtendedDemo} from './autocompletedemo';
import {AutoCompleteExtendedDemoRoutingModule} from './autocompletedemo-routing.module';
import { AutoCompleteExtenedModule} from '../../../components/autocompleteextended/autocompleteextended';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		AutoCompleteExtendedDemoRoutingModule,
		AutoCompleteExtenedModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		AutoCompleteExtendedDemo
	]
})
export class AutoCompleteDemoModule {}
