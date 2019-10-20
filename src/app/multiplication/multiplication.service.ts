import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
const SERVER = "http://localhost:";
const PORT = "8081/";
@Injectable({ providedIn: "root" })
export class MultiplicationService {
  constructor(private http: HttpClient) {}
  getTask(): Observable<any> {
    return this.http.get(`${SERVER}${PORT}getTask`);
  }

  postResult(userName, userValue, multiplicationId) {
    console.log("data passed!...");
    return this.http.post(`${SERVER}${PORT}postResponse`, {
      "userName": userName,
      "userValue": userValue,
      "multiplicationId": multiplicationId
    });
  }
   getAllUserResponses(userName): Observable<any> {
    return this.http.post(`${SERVER}${PORT}getAllUserReponseByName`,userName);
  }
}
