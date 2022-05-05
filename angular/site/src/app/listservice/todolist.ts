import { EventEmitter, Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

export interface ListData {
	type: string;
	content: string;
	id: string;
	timestamp: number;
	isDone: boolean;
}

@Injectable()
export class ListService {
	TODOLIST_LOCALSTORAGE_NAME = "listData"
	list!: ListData[];
	onUpdate = new EventEmitter<boolean>();

	constructor(
		@Inject(LOCAL_STORAGE) private storage_: StorageService,
	) {
		this.init_();
	}

	private init_() {
		// get todo list data from localstorage
		this.list = this.getList_();
	}

	checkIDUnique(id: string): boolean{
		var isUnique = true;
		this.list.forEach( (todo) =>{
			if(todo.id === id){
				isUnique = false;
				return;
			}
		})
		return isUnique;
	}

	updateList(data: ListData, action: string): void {
		switch (action){
			case 'add':
				this.list.push(data);
				break;
			case 'update':
				this.list = this.list.map( (todo) =>{
					if( todo.id === data.id){
						return data;
					}
					return todo;
				})
				break;
			case 'delete':
				this.list = this.list.filter( (todo) =>{
					return todo.id !== data.id;
				})
				break;
		}
		this.setLists_(this.list);
	}

	setLists_(listData: ListData[]): void {
		this.storage_.set(this.TODOLIST_LOCALSTORAGE_NAME, listData);
		this.onUpdate.emit(true);
	}

	getList_(): ListData[] {
		return this.storage_.get(this.TODOLIST_LOCALSTORAGE_NAME) || [];
	}

}
