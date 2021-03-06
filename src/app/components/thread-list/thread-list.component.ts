import { MessageList, Message, MessageService } from './../../services/message-service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "thread-list",
  templateUrl: "./thread-list.component.html",
  styleUrls: ["./thread-list.component.scss"]
})
export class ThreadListComponent implements OnInit {
  messages$: Observable<MessageList>;
  messages: Message[];
  currentMessage: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages$ = this.messageService.getMessages();

    this.messages$.subscribe(msgList => {
      this.messages = Array.from(msgList.messages).sort();
      this.currentMessage = this.messages[0];
    });
  }

  onSelectThread(message: any) {
    this.currentMessage = message.target;

    document.getElementsByClassName("active")[0].classList.remove("active");
    message.target.classList.add("active");
  }
}
