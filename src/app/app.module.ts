import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TopNavComponent } from "./home/top-nav/top-nav.component";
import {SideNavComponent} from "./home/side-nav/side-nav.component";
import {HomeStore} from "./home/home.store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    HomeStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
