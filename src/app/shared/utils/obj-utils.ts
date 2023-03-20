import * as lodash from 'lodash';
import { idType } from 'src/app/core/interfaces/id.type';
import { BaseModel } from '../../core/bases/baseModel';

export function isArray(obj: any): boolean {
    return lodash.isArray(obj);
}

export function isRepetido<T extends BaseModel<idType>>(item: T, array: T[]): boolean {
    return item && array ? array.some(i => i.id === item.id) : false;
}
