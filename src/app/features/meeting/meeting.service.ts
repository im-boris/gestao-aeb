import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { Local } from './models/local';
import { Agendamento } from './models/agendamento';

@Injectable({
    providedIn: 'root'
})
export class MeetingService{

    locais: Local[] = this.getLocais();
    agendamentos: Agendamento[] = [];
    locaisComAgendamento = new BehaviorSubject<Local[]>([]);

    addAgendamento(dados: Agendamento) {
        let qtdAgend: number = 0;
        this.agendamentos.push(dados);
        for (const agend of this.agendamentos) {
            if(agend.local?.id === dados.local?.id) {
                qtdAgend++;
            }
        }
        dados.local!.qtdAgendamentos = qtdAgend;
        this.setLocaisComAgendamento();
    }

    setLocaisComAgendamento() {
        let lista: Local[] = [];
        this.agendamentos.forEach(agend => {
            lista.push(agend.local!);
        });
        this.locaisComAgendamento.next([...new Set(lista)]);
    }

    getLocaisComAgendamento(): Observable<Local[]> {
        return this.locaisComAgendamento.asObservable();
    }

    getAgendamentoByIdLocal(id: number): Agendamento[] {
        return this.agendamentos.filter(agend => agend.local?.id === +id);
    }

    getLocalByID(id: number): Local | undefined {
        return this.locais.find(loc => loc.id! === +id);
    }

    getLocaisDisponiveis(): Observable<any> {
        return of(this.locais);
    }

    getLocais(): Local[] {
        return [
            {
                id: 1,
                descricao: 'Bloco A - Sala 1',
                capacidade: 10
            },
            {
                id: 2,
                descricao: 'Bloco B - Sala 2',
                capacidade: 15
            },
            {
                id: 3,
                descricao: 'Bloco B - Sala 3',
                capacidade: 25
            },
            {
                id: 4,
                descricao: 'Bloco A - Sala 4',
                capacidade: 20
            },
            {
                id: 5,
                descricao: 'Bloco D - Auditório',
                capacidade: 12
            },
            {
                id: 6,
                descricao: 'Bloco C - Sala de conferência',
                capacidade: 9
            }
        ];
    }

}