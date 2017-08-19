import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ThreadListComponent } from "./components/thread-list/thread-list.component";
import { MessageService } from "./services/message-service";

@NgModule({
  declarations: [
    AppComponent
    ThreadListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
