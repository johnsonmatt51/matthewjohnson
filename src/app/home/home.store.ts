import {Injectable} from "@angular/core";

@Injectable()
export class HomeStore {

  sidebarIsOpen = true;

  constructor() {}

  toggleSidebar() {
    this.sidebarIsOpen = !this.sidebarIsOpen;
  }

}
