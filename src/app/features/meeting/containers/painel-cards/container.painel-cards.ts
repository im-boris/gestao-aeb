import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingService } from '../../meeting.service';
import { Local } from '../../models/local';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'container-painel-cards',
    templateUrl: './container.painel-cards.html',
    styleUrls: ['./container.painel-cards.scss']
})
export class ComponentPainelCards implements OnInit {
    
    locais: Observable<Local[]> = new Observable();

    constructor(private service: MeetingService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {
        this.locais = this.service.getLocaisComAgendamento(); 
    }

    detalhar(id: number) {
        this.router.navigate([`../detalhar/${id}`], {relativeTo: this.route});
    }

}