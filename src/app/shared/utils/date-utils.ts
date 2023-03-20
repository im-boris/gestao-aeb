import * as moment from 'moment';
import { MomentEnum } from './enums/momentEnum';

moment.locale(MomentEnum.LANGUAGE);

export function getDateYesterday() {
    return subtractDays(1);
}

export function getDateToday() {
    return moment().format();
}

export function getDateTomorrow() {
    return addDays(1);
}

export function formatDate(data: string, formatos?: MomentEnum[]) {
    return formatos ? moment(data).format(formatos.join(' ')) : moment(data).format();
}

export function getDate() {
    return moment().format(MomentEnum.DATA);
}

export function getHora() {
    return moment().format(MomentEnum.HORA);
}

export function getHoraSegundos() {
    return moment().format(MomentEnum.HORA_SEGUNDOS);
}

export function addDays(qtd: number) {
    return moment().add(qtd, MomentEnum.DAYS).format();
}

export function subtractDays(qtd: number) {
    return moment().subtract(qtd, MomentEnum.DAYS).format();
}

export function addMonths(qtd: number) {
    return moment().add(qtd, MomentEnum.MONTHS).format();
}

export function subtractMonths(qtd: number) {
    return moment().subtract(qtd, MomentEnum.MONTHS).format();
}

export function addYears(qtd: number) {
    return moment().add(qtd, MomentEnum.YEARS).format();
}

export function subtractYears(qtd: number) {
    return moment().subtract(qtd, MomentEnum.YEARS).format();
}

export function addHours(qtd: number) {
    return moment().add(qtd, MomentEnum.HOURS).format();
}

export function subtractHours(qtd: number) {
    return moment().subtract(qtd, MomentEnum.HOURS).format();
}

export function addMinutes(qtd: number) {
    return moment().add(qtd, MomentEnum.MINUTES).format();
}

export function subtractMinutes(qtd: number) {
    return moment().subtract(qtd, MomentEnum.MINUTES).format();
}

export function addSeconds(qtd: number) {
    return moment().add(qtd, MomentEnum.SECONDS).format();
}

export function subtractSeconds(qtd: number) {
    return moment().subtract(qtd, MomentEnum.SECONDS).format();
}

export function isDataMaior(date1: Date, date2: Date): boolean {
    return moment(date1).isBefore(date2);
}

export function isDataMenor(date1: Date, date2: Date): boolean {
    return moment(date1).isAfter(date2);
}
