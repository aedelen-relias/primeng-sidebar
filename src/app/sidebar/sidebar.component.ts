import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarVisible: boolean = false;

  items: MenuItem[];

  @ViewChild('profileMenu') profileMenu;

  constructor() {
    this.items = [
      {label: 'Profile', icon: 'pi pi-user'},
      {label: 'Settings', icon: 'pi pi-cog'},
      {label: 'Logout', icon: 'pi pi-sign-out'}
    ];
  }

  toggleMenu(event: Event) {
    this.profileMenu.toggle(event);
  }
}
