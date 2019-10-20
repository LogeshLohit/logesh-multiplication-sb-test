import { Component, OnInit } from "@angular/core";
import { MultiplicationService } from "./multiplication.service";
@Component({
  selector: "app-multiplication",
  templateUrl: "./multiplication.component.html",
  styleUrls: ["./multiplication.component.css"]
})
export class MultiplicationComponent implements OnInit {
  public multiplication: any = null;
  public userValue: Number;
  public name: String;
  public userAttempts: any[] = [];
  constructor(private svc: MultiplicationService) {
    svc.getTask().subscribe(res => {
      this.multiplication = res;
      console.log("found response : " + JSON.stringify(this.multiplication));
    });
  }

  ngOnInit() {}
  handleSubmit() {
    console.log(
      "multiplication response id : " + this.multiplication.multiplicationId
    );
    this.svc
      .postResult(
        this.name,
        this.userValue,
        this.multiplication.multiplicationId
      )
      .subscribe(res => {
        console.log(res);
        this.multiplication = null;
      });
  }

  showPreviousAttempts(userName) {
    console.log("found request to obtain perevious attempts of " + userName);
    this.svc.getAllUserResponses(userName).subscribe(res => {
      this.userAttempts = res;
      console.log("user responses: " + JSON.stringify(this.userAttempts));
    });
  }
}
