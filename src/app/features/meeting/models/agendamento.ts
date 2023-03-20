import { BaseModel } from "src/app/core/bases/baseModel";
import { idType } from "src/app/core/interfaces/id.type";
import { Local } from "./local";
import { OpcaoReuniao } from "./opcaoReuniao";

export class Agendamento extends BaseModel<idType>{

    constructor(
        public id?: idType,
        public titulo?: string,
        public data?: Date,
        public local?: Local,
        public horaInicio?: Date,
        public horaFim?: Date,
        public isCooperagem?: boolean,
        public quantidadePessoas?: number,
        public opcaoReuniao?: OpcaoReuniao,
    ) { 
        opcaoReuniao = new OpcaoReuniao();
        super();
    }

}