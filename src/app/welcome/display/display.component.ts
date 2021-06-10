import {Component, Input, OnInit} from '@angular/core';
import {RowObject} from "./data";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() dataList;
  @Input() objects:RowObject[];

  constructor() { }

  ngOnInit(): void {
  }

}
