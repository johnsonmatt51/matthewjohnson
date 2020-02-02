import { Component, OnInit } from "@angular/core";
import {environment} from "../../../environments/environment";
import {HomeStore} from "../home.store";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {

  baseTitle: string;

  constructor(private homeStore: HomeStore) { }

  ngOnInit() {
    this.baseTitle = environment.baseTitle;
  }

  onToggleSidebar() {
    this.homeStore.toggleSidebar();
  }

}
