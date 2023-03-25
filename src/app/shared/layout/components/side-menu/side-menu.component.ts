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

  items: MegaMenuItem[] = []

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<MegaMenuItem[]>(`${environment.LOCAL}/assets/menu.json`)
    .subscribe(items => this.items = items);
  }
  // https://primeng.org/megamenu
}
