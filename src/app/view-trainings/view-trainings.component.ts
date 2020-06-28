import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TrainingServiceService } from '../training-service.service'

@Component({
  selector: 'app-view-trainings',
  templateUrl: './view-trainings.component.html',
  styleUrls: ['./view-trainings.component.css']
})
export class ViewTrainingsComponent implements OnInit {
  
  pageTitle: string = "View all Training" 
  schedules;
  searchTraining: string = "";
  scheduleDetails;

  constructor(private router: Router, private service: TrainingServiceService) {
    
  }

  ngOnInit() {
    this.schedules = this.service.trainingCollection;
    
  }

  viewDetails(id){
    console.log('id ', id)
    if(id){
      this.router.navigate(['/view-details'], { queryParams: { trainingId: id}, queryParamsHandling: 'merge'})
    }
  }
}
