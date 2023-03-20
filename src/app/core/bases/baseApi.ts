import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { BaseModel } from "./baseModel";

export abstract class BaseApi<R , ID,  T extends BaseModel<ID>> {

    abstract endpoint: string;

    headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json'});
    base_url: string = environment.REST_URL + environment.BASE_API;

    constructor(public http: HttpClient) {}

    get(id: ID): Observable<R> {
        return this.http.get<R>(`${this.endpoint}/${id}`);
    }

    getByFilter(obj: T): Observable<R[]> {
        return this.http.get<R[]>(this.endpoint + this.objectToQueryString(obj));
    }

    getAll(): Observable<R[]> {
        return this.http.get<R[]>(this.endpoint);
    }

    create(item: T): Observable<R> {
        return this.http.post<R>(this.endpoint, item, { headers: this.headers });
    }

    update(item: T): Observable<R> {
        return this.http.put<R>(`${this.endpoint}/${item.id}`, item, { headers: this.headers });
    }

    delete(id: ID): Observable<R> {
        return this.http.delete<R>(`${this.endpoint}/${id}`, { headers: this.headers });
    }
    
    private objectToQueryString(obj: T): string {
        let queryString = '?';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                queryString += key + "=" + obj[key] + "&";
            }
        }
        return queryString.slice(0, -1);
    }
    
}
