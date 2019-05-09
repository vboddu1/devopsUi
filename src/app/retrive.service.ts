import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class RetriveService {
  
  insertUrl = "http://172.17.10.48:7000/api/insert";
  retriveUrl = "http://172.17.10.48:7000/api/retrieveById";

  constructor(private http: HttpClient) { }

insertApi(data) {
  return this.http.post(
    this.insertUrl,
    data).map((uresponse: Response) => {
      // this.userData=uresponse.json();
      return uresponse;
    }, error => {
      console.log(error);
    })
}

retriveApi(request) {

  return this.http.get(this.retriveUrl+"?sEmail="+request).map((uresponse: Response) => {
    return uresponse;
  });

}

}
