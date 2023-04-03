import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { MegaMenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  items: MegaMenuItem[] = [
    { 
        "label": "Reunião", 
        "icon": "pi pi-fw pi-calendar-plus",
        "routerLink": "features/meeting/list"
    },
    { 
        "label": "Chamados", 
        "icon": "pi pi-fw pi-phone",
        "routerLink": "features/chamados/list"
    },
    { 
        "label": "Recepção", 
        "icon": "pi pi-fw pi-comment",
        "routerLink": "features/meeting/edit"
    }
]

  constructor(private http: HttpClient){}

  ngOnInit() {
    // this.http.get<MegaMenuItem[]>(`${environment.LOCAL}/assets/menu.json`)
    // .subscribe(items => this.items = items);
  }
  // https://primeng.org/megamenu
}
