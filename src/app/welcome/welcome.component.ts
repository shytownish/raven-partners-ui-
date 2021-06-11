import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {NgForm} from "@angular/forms";
import {DataListService} from "../data-list.service";
import {HttpClient} from "@angular/common/http";
import {Item, Response, Result, RowObject} from "./display/data";
import {Body, settlement} from "./body";

declare var DURL: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  startDate:string;
  endDate:string;
  merchNbr:string;
  value = 'settlement';
  displayMap:Item[];

  todo = [
    'Pan',
    'Network Reference Id',
    'Transaction Id',
    'Total Transaction Amount',
    'Issuer Amount',
    'Acquirer Amount',
    "Transaction Date"
  ];

  done = [

  ];


  rowsResult:Result[];

  dateEvents: string[] = [];
  display:boolean;


  constructor(private datalist: DataListService, private http: HttpClient) {
    this.display = false;
    this.merchNbr = "";
    this.displayMap = datalist.getList();
  }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dateEvents.push(`${type}: ${event.value}`);
  }

  onSubmit(form: NgForm) {
    if(form.value.endDate){
      this.startDate = form.value.enddate.toJSON()
      this.endDate = form.value.startdate.toJSON()
    }
    else{
      this.startDate = "";
      this.endDate = "";
    }

    this.http.post("", JSON.stringify(this.getBody())).subscribe(response=>{
      console.log(JSON.stringify(response));
      this.rowsResult = (response as any).data;
    })
      // this.rowsResult = [
      //   {
      //     Pan: "PanNumber",
      //     networkReferenceId: "NetworkreferenceId",
      //     transactionId: "transactionId",
      //     totalTransanctionAmount: "totalTransanctionAmount",
      //     issuerAmount: "issuer amount",
      //     AcquirerAmount: "AcquirerAmount",
      //     transactiondate: "transanctionDate"
      //   },
      //   {
      //     Pan: "PanNumber2",
      //     networkReferenceId: "NetworkreferenceId2",
      //     transactionId: "transactionId2",
      //     totalTransanctionAmount: "totalTransanctionAmount2",
      //     issuerAmount: "issuer amount2",
      //     AcquirerAmount: "AcquirerAmount2",
      //     transactiondate: "transanctionDate2"
      //   }
      // ]


    this.display= true;
  }


  getBody():Body{
    let obj: Body;

    let dates = {
      start: this.startDate,
      end: this.endDate
    }

    let  p =  {
      settlement: dates
    };

    obj = {
      order : this.datalist.getNoTDisplayName(this.done),
      lifecycle: [ "settlement"],
      scope: ["eventPayload", "eventHeader", "dictionary", "governingAgreement"],
      userProfile : {
        representing : {
          issuers : [ "10000"],
          acquirers: []
        }
      },
      merchNbr : this.merchNbr,
      period: p
    }
      return obj;
    }
}
