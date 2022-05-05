import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListData, ListService } from '../../listservice/todolist';

@Component({
  selector: 'app-todolist-table',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class TodolistTableComponent implements OnInit {
  dataArr_!: ListData[];
  @Input() isReadOnly!: boolean;
  @Input() filter!: string;
  @Input() set dataArr(value: any) {
    this.dataArr_ = value;
  }
  get dataArr(): any {
    return this.dataArr_;
  }
  
  typeSelections = [
    {key: "personal", value: "Personal"},
    {key: "work", value: "Work"},
    {key: "meeting", value: "Meeting"},
    {key: "other", value: "Other"}
  ]
  
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private readonly todolistService_: ListService,
    ) { }
    
  ngOnInit(): void { }


  getDataSource(): MatTableDataSource<ListData> {
    const tableData = new MatTableDataSource<ListData>();
    tableData.sort = this.sort;
    
    tableData.data = this.dataArr_;

    if(this.filter){
      switch (this.filter){
        case 'done':
          tableData.data = this.dataArr_.filter(d =>{
            return d.isDone
          });
          break;
        case 'open':
          tableData.data = this.dataArr_.filter(d =>{
            return !d.isDone
          });
          break;
      }
    }
    
    return tableData;
  }

  getDataType(type: string): string{
    let result = this.typeSelections.find(obj => {
      return obj.key === type
    });
    return result? result.value : '';
  }

  toDate(timestamp: number): string{
    var a = new Date(timestamp);
    var year = a.getFullYear();
    var month = a.getMonth()+1 ;
    var date = a.getDate();
    var hour = (a.getHours() > 9) ? a.getHours(): '0' + a.getHours();
    var min = (a.getMinutes() > 9) ? a.getMinutes(): '0' + a.getMinutes();
    var sec = (a.getSeconds() > 9) ? a.getSeconds(): '0' + a.getSeconds();
    return year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec ;
  }

  delete(data: ListData): void {
    this.todolistService_.updateList(data, 'delete');
    this.todolistService_.onUpdate.emit(true);
  }

  checkListData(data: ListData): void{
    this.todolistService_.updateList(data, 'update');
    this.todolistService_.onUpdate.emit(true);
  }
}
