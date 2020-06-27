import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingServiceService } from './training-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manage-training';
  constructor(private router: Router, private service: TrainingServiceService){

    console.log('router ', router.url)
  }

}
