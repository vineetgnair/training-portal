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
  trainingDetailsObject = {
    id: "",
    trainingName: "",
    trainingDescription: "",
    trainingDept: "",
    trainingDurationHours: "",
    trainingDurationMinutes: "",
    trainingDate: "",
    trainingStartHours: "",
    trainingStartMinutes: "",
    trainingMeridiem: "",
    trainingRoom: ""
  };  
  createTraining: boolean = false;
  allTrainings;
  trainingForm;
  queryParameters = {
    "mode": "",
    "id": ""
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private service: TrainingServiceService, private activatedRoute: ActivatedRoute) { 
    
    this.allTrainings = this.service.getAllTraining();

    this.trainingForm = this.formBuilder.group({
      trainingName: ['', Validators.required],
      trainingDescription: [''],
      trainingDept: ['', Validators.required],
      trainingDurationHours: ['', Validators.required],
      trainingDurationMinutes: ['', Validators.required],
      trainingDate: ['', Validators.required],
      trainingStartHours: ['', Validators.required],
      trainingStartMinutes: ['', Validators.required],
      trainingMeridiem: ['', Validators.required],
      trainingRoom: ['', Validators.required]
    });

  }
  



  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.mode == 'create') {
        this.queryParameters.mode = params.mode;
        this.queryParameters.id = "-1";
      } else {
        this.queryParameters.id = params.trainingId;
      }
      //this.trainingID = params.trainingId

      if(this.queryParameters.id !== "") {
        let currentSchedule = this.getCurrentTraining();
        this.trainingForm.setValue({
          trainingName: this.trainingDetailsObject.trainingName,
          trainingDescription: this.trainingDetailsObject.trainingDescription,
          trainingDept: this.trainingDetailsObject.trainingDept,
          trainingDurationHours: this.trainingDetailsObject.trainingDurationHours,
          trainingDurationMinutes: this.trainingDetailsObject.trainingDurationMinutes,
          trainingDate: this.trainingDetailsObject.trainingDate,
          trainingStartHours: this.trainingDetailsObject.trainingStartHours,
          trainingStartMinutes: this.trainingDetailsObject.trainingStartMinutes,
          trainingMeridiem: this.trainingDetailsObject.trainingMeridiem,
          trainingRoom: this.trainingDetailsObject.trainingRoom
        })
      }
    });
  }

  
  getTrainingDuration() {
    return `${this.trainingForm.value.trainingDurationHours} hours, ${this.trainingForm.value.trainingDurationMinutes} minutes`; 
  }

  getTrainingDateTime(){
    console.log('datepicker value ', this.trainingForm.value.trainingDate)
    return `${this.trainingForm.value.trainingDate}, ${this.trainingForm.value.trainingStartHours}:${this.trainingForm.value.trainingStartMinutes} ${this.trainingForm.value.trainingMeridiem}`
  }

  generateRandomId(){
    return `ts-${new Date().getTime().toString() + Math.floor(Math.random()*1000000)}`;
  }

  getCurrentTraining(){
    let currentTrainingItem = this.service.trainingCollection.find(item => {
      return item['id'] == this.queryParameters.id
    })
    
    this.trainingDetailsObject = {
      id: currentTrainingItem.id,
      trainingName: currentTrainingItem.name,
      trainingDescription: currentTrainingItem.description,
      trainingDept: currentTrainingItem.department,
      trainingDurationHours: currentTrainingItem.duration.match(/\d+/g)[0],
      trainingDurationMinutes: currentTrainingItem.duration.match(/\d+/g)[1],
      trainingDate: currentTrainingItem.dateTime.split(',')[0],
      trainingStartHours: currentTrainingItem.dateTime.split(',')[1].trim().split(' ')[0].split(':')[0],
      trainingStartMinutes: currentTrainingItem.dateTime.split(',')[1].trim().split(' ')[0].split(':')[1],
      trainingMeridiem: currentTrainingItem.dateTime.split(',')[1].trim().split(' ')[1],
      trainingRoom: currentTrainingItem.meetingRoom
    }

  }

  onSubmit() {
    if(this.trainingForm.valid) {
      

      let objectId: string = this.queryParameters.mode === 'create' ? this.generateRandomId() : this.queryParameters.id;
      let trainingDuration: string  = this.getTrainingDuration();
      let trainingDateTime: string = this.getTrainingDateTime();

      this.newTrainingObject = {
        id: objectId,
        name: this.trainingForm.value.trainingName,
        description: this.trainingForm.value.trainingDescription,
        department: this.trainingForm.value.trainingDept,
        duration: trainingDuration,
        dateTime: trainingDateTime,
        meetingRoom: this.trainingForm.value.trainingRoom
      }

      if(this.queryParameters.mode === 'create') {
        this.service.createTraining(this.newTrainingObject);
      } else {
        this.service.updateTraining(this.newTrainingObject);
      }
      //this.service.trainingCollection.push(this.newTrainingObject)

      this.router.navigateByUrl('/view-all');
    }
  }

  get formControlsValidation(): any{
    return this.trainingForm['controls'];
  }
}
