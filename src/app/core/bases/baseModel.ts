import { id } from "src/app/core/interfaces/id";

export abstract class BaseModel<T> implements id<T> {

    abstract id?: T;
    
    static fromJson<T extends Object>(target: new (...args: any[]) => T, json?: T): Object {
        return json ? Object.assign(new target(), json) : new target();
    }

    static removeProperties(obj: any, propertyNames: string[]): object {
        const copy = {...obj};
        propertyNames.forEach(propertyName => {
            delete copy[propertyName];
        });
        return copy;
    }

    static removeNullProperties(obj: any): object {
        const copy = { ...obj };
        Object.keys(copy).forEach(key => {
            if (!copy[key]) {
                delete copy[key];
            } else if (typeof copy[key] === 'object' && copy[key] !== null) {
                copy[key] = this.removeNullProperties(copy[key]);
            }
        });
        return copy;
    }

}