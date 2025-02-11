import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http: HttpClient) {
    }

    getContent() {
        return this.http.get('data.json');
    }

}