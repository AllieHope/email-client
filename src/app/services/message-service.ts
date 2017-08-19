import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Http} from "@angular/http";

export interface Message {
    uid: string;
    sender: string;
    subject: string;
    message: string;
    time_sent: number;
}

export interface MessageList {
    messages: Message[];
}

@Injectable()
export class MessageService {

  constructor(private http: Http) {
  }

  getMessages(): Observable<MessageList> {
    return this.http.get("./assets/messages_sample.txt")
      .map((res: any) => res.json());
  }
  
}