import { Component, OnInit } from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {

  baseTitle: string;

  constructor() { }

  ngOnInit() {
    this.baseTitle = environment.baseTitle;
  }

}
