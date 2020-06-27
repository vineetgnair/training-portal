import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TrainingServiceService } from '../training-service.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { filter } from 'rxjs/operators';


interface Schedule {
  id: string,
  name: string,
  description: string,
  department: string,
  duration: string,
  dateTime: string,
  meetingRoom: string
}

@Component({
  selector: 'app-create-trainings',
  templateUrl: './create-trainings.component.html',
  styleUrls: ['./create-trainings.component.css']
})
export class CreateTrainingsComponent implements OnInit {
  trainingID: string;
  newTrainingObject: Schedule;  
  constructor(private router: Router, private formBuilder: FormBuilder, private service: TrainingServiceService, private activatedRoute: ActivatedRoute) { }
  
  
  createTrainingForm = this.formBuilder.group({
    trainingName: ['', Validators.required],
    trainingDescription: ['', Validators.required],
    trainingDept: ['', Validators.required],
    trainingDurationHours: ['', Validators.required],
    trainingDurationMinutes: ['', Validators.required],
    trainingDate: ['', Validators.required],
    trainingStartHours: ['', Validators.required],
    trainingStartMinutes: ['', Validators.required],
    trainingMeridiem: ['', Validators.required],
    trainingRoom: ['', Validators.required]
  });

  

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.trainingID = params.trainingId
      console.log('this.trainingID ', this.trainingID)
    });
  }

  getTrainingDuration() {
    return `${this.createTrainingForm.value.trainingDurationHours} hours, ${this.createTrainingForm.value.trainingDurationMinutes} minutes`; 
  }

  getTrainingDateTime(){
    return `${this.createTrainingForm.value.trainingDate}, ${this.createTrainingForm.value.trainingStartHours}:${this.createTrainingForm.value.trainingStartMinutes} ${this.createTrainingForm.value.trainingMeridiem}`
  }

  generateRandomId(){
    return `ts-${new Date().getTime().toString() + Math.floor(Math.random()*1000000)}`;
  }

  onSubmit() {
    if(this.createTrainingForm.valid) {
      let objectId: string = this.generateRandomId();
      let trainingDuration: string  = this.getTrainingDuration();
      let trainingDateTime: string = this.getTrainingDateTime();

      this.newTrainingObject = {
        id: objectId,
        name: this.createTrainingForm.value.trainingName,
        description: this.createTrainingForm.value.trainingDescription,
        department: this.createTrainingForm.value.trainingDept,
        duration: trainingDuration,
        dateTime: trainingDateTime,
        meetingRoom: this.createTrainingForm.value.meetingRoom
      }
      this.service.trainingCollection.push(this.newTrainingObject)

      this.router.navigateByUrl('/view-all');
    }
  }

  get formControlsValidation(): any{
    return this.createTrainingForm['controls'];
  }
}
