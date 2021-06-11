import {Component, Input, OnInit} from '@angular/core';
import {Item, Result} from "./data";
import {DataListService} from "../../data-list.service";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // dataSource = ELEMENT_DATA;

  rowsResult = [
    {
      Pan: "PanNumber",
      NetworkReferenceId: "NetworkreferenceId",
      TransactionId: "transactionId",
      TotalTransanctionAmount: "totalTransanctionAmount",
      IssuerAmount: "issuer amount",
      AcquirerAmount: "AcquirerAmount",
      TransactionDate: "transanctionDate"
    },
    {
      Pan: "PanNumber2",
      NetworkReferenceId: "NetworkreferenceId2",
      TransactionId: "transactionId2",
      TotalTransanctionAmount: "totalTransanctionAmount2",
      IssuerAmount: "issuer amount2",
      AcquirerAmount: "AcquirerAmount2",
      Transactiondate: "transanctionDate2"
    }
  ]

  @Input() displayedColumns:string[];
  @Input() dataObjects:Result[];
  dataSource = new MatTableDataSource<Result>();

  display:string[];
  constructor(private datalist:DataListService) {
  }

  getLabel(row:string):string {

    let item:Item = this.datalist.getList().find((x) => {
      return row == x.display;
    })

    return item.data;
  }

  ngOnInit(): void {
    this.display = this.displayedColumns;
    this.dataSource.data = this.rowsResult;

  }

}
