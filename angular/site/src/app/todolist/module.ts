import { NgModule } from '@angular/core';
import { TodoListViewComponent } from './component';
import { SharedModule } from '../shared.module';
import { ComponentsModule } from '../components/module';

@NgModule({
    imports: [SharedModule,ComponentsModule],
    declarations: [TodoListViewComponent]
})
export class TodoListViewModule { }
