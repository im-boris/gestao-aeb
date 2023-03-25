import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChamadosService } from '../../chamados.service';
import { Chamado } from '../../models/chamado';
import { Status } from '../../models/status';

@Component({
    selector: 'container-painel-cards',
    templateUrl: './container.painel-cards.html',
    styleUrls: ['./container.painel-cards.scss']
})
export class ComponentPainelCards implements OnInit {
    
    chamados: Observable<Chamado[]> = new Observable();
    chamadosBkp: Observable<Chamado[]> = new Observable();

    constructor(private service: ChamadosService) {}

    ngOnInit(): void {
        this.chamados = this.service.getChamados(); 
        this.chamadosBkp = this.service.getChamados(); 
        this.service.getStatusSelecionado().subscribe(r => {
            if(r.descricao === Status.TODOS.toLocaleLowerCase()) {
                this.chamados = this.chamadosBkp;
            } else {
                this.chamados = this.chamadosBkp.pipe(
                    map(chamados => {
                        return chamados.filter(c => c.status?.descricao?.toLocaleLowerCase() === r.descricao)
                    })
                )
            }
        })
    }

}