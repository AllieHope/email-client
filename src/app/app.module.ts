import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ThreadListComponent } from "./components/thread-list/thread-list.component";

@NgModule({
  declarations: [
    AppComponent
    ThreadListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
