import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'factura', title: 'Nueva Factura',  icon: 'pe-7s-portfolio', class: '' },
    { path: 'facturas-existentes', title: 'Facturas',  icon: 'pe-7s-box1', class: '' },
    { path: 'clientes', title: 'Clientes', icon: 'pe-7s-users', class: ''},
    { path: 'productos', title: 'Productos', icon: 'pe-7s-box2', class: ''}
    // { path: 'clientes', title: 'Clientes',  icon: 'pe-7s-users', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  // isMobileMenu() {
  //     if ($(window).width() > 991) {
  //         return false;
  //     }
  //     return true;
  // }
}
