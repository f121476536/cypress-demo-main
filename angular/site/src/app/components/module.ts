import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { TodolistformComponent } from '../components/form/component';
import { TodolistTableComponent } from '../components/table/component';
import { NavComponent } from './nav/component';

const components = [
    TodolistformComponent,
    TodolistTableComponent,
    NavComponent
]
@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [...components],
    exports: [...components]
})
export class ComponentsModule { }
