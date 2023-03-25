import { idType } from "src/app/core/interfaces/id.type";
import { StatusChamado } from "./statusChamado";

export interface Chamado {
    id?: idType,
    dataAbertura?: Date,
    dataSuspensao?: Date,
    dataAtendimento?: Date,
    status?: StatusChamado
}