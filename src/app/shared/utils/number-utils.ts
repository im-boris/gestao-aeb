import * as lodash from 'lodash';

export function getRandomNumber(min: number, max: number): number {
    return lodash.random(min, max);
}