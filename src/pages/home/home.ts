import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../models/task';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allTasks: Task[] = [];
  public task: Task = new Task();

  constructor(
    public navCtrl: NavController,
    public taskService: TaskService
  ) { }

  ionViewDidLoad(){
    
    this.taskService.load()
      .subscribe((tasks) => {
        console.log("from firebase ", tasks);
        this.allTasks = (tasks) ? tasks : [];    
      })
  }

  saveTask(): void{
    if(this.task.name.length < 3) return;

    this.allTasks.push(this.task);
    this.task = new Task();
    this.taskService.save(this.allTasks);
    this.allTasks.splice(this.allTasks.length -1);
    
  }

  // taskDone(task: Task){

  //   let index = this.allTasks.indexOf(task);
  //   if(index != -1) this.allTasks[index].status = 1;
  //   this.taskService.save(this.allTasks);
    
  // }

  updateTask(){
    this.taskService.save(this.allTasks);
  }
}
