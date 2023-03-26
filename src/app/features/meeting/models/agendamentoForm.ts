import { Agendamento } from "./agendamento";
import { OpcaoReuniao } from "./opcaoReuniao";

export class AgendamentoForm {

    values: Agendamento;
    dataMin: Date = new Date();

    constructor() {
        this.values = Agendamento.fromJson(Agendamento, new Agendamento());
    }

    desabilitarBotao() {
        return this.values.local?.id ? false : true;
    }

    setDescOpcao(idOpcao: number) {
        this.values.opcaoReuniao!.descOpcao = OpcaoReuniao.getDescricaoOpcao(idOpcao);
    }

}