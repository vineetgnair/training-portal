import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Schedule {
  id: string,
  name: string,
  description: string,
  department: string,
  duration: string,
  dateTime: string,
  meetingRoom: string
}

@Injectable({
  providedIn: 'root'
})
export class TrainingServiceService {

  trainingCollection: Schedule[];
  private _mockDataUrl = './assets/mock-data.json';

  constructor(private httpClient: HttpClient) {
    this.fetchData();
  }
  fetchData(){
    this.getJSON().subscribe(data => {
      this.trainingCollection = data.schedules;
    })
  }
  
  getJSON() :Observable<any>{
    return this.httpClient.get(this._mockDataUrl)
  }

  public getAllTraining(){
    return this.trainingCollection;
  }

  createTraining(object){
    this.trainingCollection.push(object)
  }

  updateTraining(object){
    var filtered = this.trainingCollection.filter((item) => {
      return item.id !== object.id
    })
    filtered.push(object);
    this.trainingCollection = [];
    this.trainingCollection = filtered;
  }
}
