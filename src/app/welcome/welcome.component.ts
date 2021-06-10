import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {NgForm} from "@angular/forms";
import {DataListService} from "../data-list.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  done = [

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

     console.log(form.value.password);

    this.http.get("").subscribe(response=>{
      console.log(response)
    })
    this.display= true;
  }
}
