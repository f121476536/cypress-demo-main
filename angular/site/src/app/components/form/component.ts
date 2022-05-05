import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ListData, ListService } from '../../listservice/todolist';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class TodolistformComponent implements OnInit {
  form = new FormGroup({
    type: new FormControl(''),
    content: new FormControl(''),
  });

  typeSelections = {
    "personal": "Personal",
    "work": "Work",
    "meeting": "Meeting",
    "other": "Other"
  };

  constructor(
    @Inject(LOCAL_STORAGE) private storage_: StorageService,
    private readonly todolistService_: ListService,
  ) { }


  ngOnInit(): void { }

  add(): void {
    var data = this.form.value;
    var sendData: ListData = {
      type: data.type,
      content: data.content,
      id: this.getID(12),
      timestamp: Date.now(),
      isDone: false
    }
    this.todolistService_.updateList(sendData, 'add');
    this.reset();
  }
  reset(): void {
    this.form.setValue({ type: '', content: '' });
  }

  getID(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }

    return this.todolistService_.checkIDUnique(result)? result: this.getID(length);    
  }
}
