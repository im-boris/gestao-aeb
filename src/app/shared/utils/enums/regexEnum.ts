export enum RegexEnum {
    NUMERO_INTEIRO = '^\\d+$',
    NUMERO_DECIMAL = '^\\d*\\.\\d+$',
    NUMERO_INTEIRO_DECIMAL = '^\\d*(\\.\\d+)?$',
    NUMERO_INTEIRO_NEGATIVO_POSITIVO_DECIMAL = '^-?\\d*(\\.\\d+)?$',
    NUMERO_INTEIRO_DECIMAL_FRACAO = '[-]?[0-9]+[,.]?[0-9]*([\\/][0-9]+[,.]?[0-9]*)*',
    EMAIL = '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6})*$',
    PASSWORD_COMPLEX = '(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\\\[\\]{}\\-_+=~\`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}',
    PASSWORD_MODERATE = '(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$',
}

// https://digitalfortress.tech/tips/top-15-commonly-used-regex/