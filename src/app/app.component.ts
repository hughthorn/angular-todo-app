import { Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';

  tasks$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTasks().subscribe(
      data => this.tasks$ = data.tasks
    )
  }

  filterNotInProgress(task) {
    if(task.inprogress === false) {
      return true;
    }
  }

  filterInProgress(task) {
    if(task.inprogress === true) {
      return true;
    }
  }

  filterNotComplete(task) {
    if(task.completed === false) {
      return true;
    }
  }

  filterComplete(task) {
    if(task.completed === true) {
      return true;
    }
  }

  filterThing(thing, bool, method){
    // if(thing[method]===bool){
    //   return true
    // }
    return thing[method]===bool ?  true : false
  }
}
