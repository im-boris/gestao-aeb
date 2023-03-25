import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChamadosService } from '../../chamados.service';
import { StatusChamado } from '../../models/statusChamado';

@Component({
    selector: 'container-header',
    templateUrl: './container.header.html',
    styleUrls: ['./container.header.scss']
})
export class ContainerHeader implements OnInit {

    status!: Observable<StatusChamado[]>;
    statusSelecionado: StatusChamado = {};

    constructor(private service: ChamadosService) {}
    
    ngOnInit(): void {
        this.status = this.service.getStatusChamados();
    }

    setStatusSelecionado() {
        this.service.setStatusSelecionado(this.statusSelecionado);
    }

}