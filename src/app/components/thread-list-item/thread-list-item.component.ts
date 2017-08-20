import { Message } from './../../services/message-service';
import { Component, OnInit, Input } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "thread-list-item",
  templateUrl: "./thread-list-item.component.html",
  styleUrls: ["./thread-list-item.component.scss"]
})
export class ThreadListItemComponent implements OnInit {

  @Input() message: Message;
  @Input() active: boolean;
  formattedTime: any;

  constructor() { }

  ngOnInit() {
    this.formattedTime = moment(this.message.time_sent).format("ddd D MMM, kk:mm");
  }

}
