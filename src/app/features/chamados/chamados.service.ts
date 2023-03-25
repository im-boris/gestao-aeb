import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { Chamado } from './models/chamado';
import { Status } from './models/status';
import { StatusChamado } from './models/statusChamado';

@Injectable({
    providedIn: 'root'
})
export class ChamadosService {

    statusSelecionado = new BehaviorSubject<StatusChamado>({});

    statusChamado: StatusChamado[] = [
        {id: 0, descricao: Status.TODOS.toLocaleLowerCase()},
        {id: 1, descricao: Status.ABERTO.toLocaleLowerCase()},
        {id: 2, descricao: Status.FECHADO.toLocaleLowerCase()},
        {id: 3, descricao: Status.CONCLUIDO.toLocaleLowerCase()},
        {id: 4, descricao: Status.SUSPENSO.toLocaleLowerCase()},
    ];

    chamados: Chamado[] = [
        {id: 37047, status:{id:1, descricao: Status.ABERTO}, dataAbertura: new Date("2023-02-15"), dataAtendimento: new Date("2023-06-07"), dataSuspensao: new Date("2023-11-28")},
        {id: 80539, status:{id:4, descricao: Status.SUSPENSO}, dataAbertura: new Date("2023-02-03"), dataAtendimento: new Date("2023-06-08"), dataSuspensao: new Date("2024-02-01")},
        {id: 25881, status:{id:3, descricao: Status.CONCLUIDO}, dataAbertura: new Date("2023-01-20"), dataAtendimento: new Date("2023-06-21"), dataSuspensao: new Date("2024-01-19")},
        {id: 61760, status:{id:1, descricao: Status.ABERTO}, dataAbertura: new Date("2023-01-13"), dataAtendimento: new Date("2023-06-30"), dataSuspensao: new Date("2023-12-07")},
        {id: 51104, status:{id:2, descricao: Status.FECHADO}, dataAbertura: new Date("2023-03-11"), dataAtendimento: new Date("2023-09-22"), dataSuspensao: new Date("2024-01-20")},
        {id: 84837, status:{id:4, descricao: Status.SUSPENSO}, dataAbertura: new Date("2023-03-08"), dataAtendimento: new Date("2023-08-24"), dataSuspensao: new Date("2023-11-21")},
        {id: 74781, status:{id:2, descricao: Status.FECHADO}, dataAbertura: new Date("2023-02-08"), dataAtendimento: new Date("2023-08-23"), dataSuspensao: new Date("2023-12-20")},
        {id: 14768, status:{id:4, descricao: Status.SUSPENSO}, dataAbertura: new Date("2023-02-22"), dataAtendimento: new Date("2023-07-04"), dataSuspensao: new Date("2023-12-15")},
        {id: 68715, status:{id:4, descricao: Status.SUSPENSO}, dataAbertura: new Date("2023-02-06"), dataAtendimento: new Date("2023-09-22"), dataSuspensao: new Date("2024-03-12")}
    ];

    getStatusChamados(): Observable<StatusChamado[]> {
        return of(this.statusChamado);
    }

    getChamados(): Observable<Chamado[]> {
        return of(this.chamados);
    }

    setStatusSelecionado(status: StatusChamado) {
        this.statusSelecionado.next(status);
    }

    getStatusSelecionado(): Observable<StatusChamado> {
        return this.statusSelecionado.asObservable();
    }

}