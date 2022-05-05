import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class NavComponent implements OnInit {
  ActiveRoute!: string;
  @Input() activeRoute!: string;

  constructor(
    
  ) { }


  ngOnInit(): void { }

 
}
