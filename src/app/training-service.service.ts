import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Schedule {
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
    this.getJSON().subscribe(data => {
      this.trainingCollection = data.schedules;
    })
  }

  getJSON() :Observable<any>{
    return this.httpClient.get(this._mockDataUrl)
  }

  formateDate(){
    
  }
}
