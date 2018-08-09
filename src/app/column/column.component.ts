import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task.component';
// import { DataService } from '../data.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  // tasks$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTasks().subscribe(
      data => this.tasks$ = data.tasks
    )
  }

  // filterNotInProgress(task) {
  //   if(task.inprogress === false) {
  //     return true;
  //   }
  // }

  // filterInProgress(task) {
  //   if(task.inprogress === true) {
  //     return true;
  //   }
  // }

  // filterNotComplete(task) {
  //   if(task.completed === false) {
  //     return true;
  //   }
  // }

  // filterComplete(task) {
  //   if(task.completed === true) {
  //     return true;
  //   }
  // }

  // filterThing(thing, bool, method){
  //   // if(thing[method]===bool){
  //   //   return true
  //   // }
  //   return thing[method]===bool ?  true : false
  // }
}
