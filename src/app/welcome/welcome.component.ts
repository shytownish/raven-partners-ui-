import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {NgForm} from "@angular/forms";
import {DataListService} from "../data-list.service";
import {HttpClient} from "@angular/common/http";
import {RowObject} from "./display/data";
import {Body, settlement} from "./body";

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

  todo = [
    'Pan',
    'NetworkReferenceId',
    'transanctionId',
    'totalTransanctionAmount',
    'IssuerAmount',
    'AcquirerAmount'
  ];

  done = [

  ];


 rowsResult:RowObject[] = [

   { items: [
       {
         display: 'TextToDisplay',
         dataDisplay: "dataToDisplay"
       },
       {
         display: 'TextToDisplay2',
         dataDisplay: "dataToDisplay2"
       }
     ]},

   { items: [
     {
     display: 'TextToDisplay',
     dataDisplay: "dataToDisplay"
   },
     {
       display: 'TextToDisplay2',
       dataDisplay: "dataToDisplay2"
     }]}

 ];

  dateEvents: string[] = [];
  display:boolean;


  constructor(private datalist: DataListService, private http: HttpClient) {
    this.todo = datalist.getList();
    this.display = false;

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

   this.startDate = form.value.enddate.toJSON()
    this.endDate = form.value.startdate.toJSON()

    console.log(form.value);
    console.log(JSON.stringify(this.getBody()));

    this.http.post("", JSON.stringify(this.getBody())).subscribe(response=>{
      console.log(response)
    })

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
      order : this.done,
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
