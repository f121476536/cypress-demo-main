import { Component, OnInit } from '@angular/core';
import { ListData, ListService } from '../listservice/todolist';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todolist-view',
  templateUrl: './template.html'
})
export class TodoListViewComponent implements OnInit {
  private unsubscribe_ = new Subject<void>();
  dataArr!: ListData[];
  filter!: string;

  constructor(
    private readonly todolistService_: ListService,
    private readonly router_: Router
  ) {
    this.router_.events.subscribe((event) => {
        let url = this.router_.url
        this.filter = url.replace('/', '');
    });
  }


  ngOnInit(): void {
    this.updateList();
    this.dataArr = this.todolistService_.getList_();

    this.filter
  }

  updateList() {
    this.unsubscribe_.next();
    this.todolistService_.onUpdate
      .pipe(takeUntil(this.unsubscribe_))
      .subscribe(() => {
        this.dataArr = this.todolistService_.getList_();
        this.updateList();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe_.next();
    this.unsubscribe_.complete();
  }

}