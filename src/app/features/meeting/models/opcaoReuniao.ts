import { BaseModel } from "src/app/core/bases/baseModel";
import { idType } from "src/app/core/interfaces/id.type";
import { Opcao } from "./opcaoReuniao.enum";

export class OpcaoReuniao extends BaseModel<idType> {

    constructor(
        public id?: idType,
        public descOpcao?: string,
        public txtDetalhesReuniao?: string,
    ) {
        super();
    }

    static getDescricaoOpcao (id: number): string {
        const opcao = {
            1: Opcao.LINK_REUNIAO,
            2: Opcao.SUPORTE_TI,
            3: Opcao.NENHUM
        };
        return opcao[id as keyof typeof opcao];
    }
}
