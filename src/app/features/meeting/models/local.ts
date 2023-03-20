import { idType } from "src/app/core/interfaces/id.type"

export class Local {
    constructor(
        public id?: idType,
        public descricao?: string,
        public capacidade?: number,
        public qtdAgendamentos?: number,
    ) {}
}