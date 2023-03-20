import { RegexEnum } from "./enums/regexEnum";

const flags = "gim";

export function isNumeroInteiro(str: string): boolean {
    const re = new RegExp(RegexEnum.NUMERO_INTEIRO, flags);
    return !!str.match(re);
}

export function isNumeroDecimal(str: string): boolean {
    const re = new RegExp(RegexEnum.NUMERO_DECIMAL, flags);
    return !!str.match(re);
}

export function isNumeroInteiroDecimalFracao(str: string): boolean {
    const re = new RegExp(RegexEnum.NUMERO_INTEIRO_DECIMAL_FRACAO, flags);
    return !!str.match(re);
}

export function isEmailValido(str: string): boolean {
    const re = new RegExp(RegexEnum.EMAIL, flags);
    return !!str.match(re);
}

export function isPasswordComplex(str: string): boolean {
    const re = new RegExp(RegexEnum.PASSWORD_COMPLEX, flags);
    return !!str.match(re);
}
