import { Component, OnInit } from "@angular/core";
import {HomeStore} from "../home.store";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {

  constructor(private homeStore: HomeStore) {}

  ngOnInit() {
  }

  get isOpen() {
    return this.homeStore.sidebarIsOpen;
  }

}
