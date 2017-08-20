import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../../services/message-service";

@Component({
  selector: "current-thread",
  templateUrl: "./current-thread.component.html",
  styleUrls: ["./current-thread.component.scss"]
})
export class CurrentThreadComponent implements OnInit {

  @Input() message: string;
  constructor() {
    this.message = "";
   }

  ngOnInit() {
  }

}
