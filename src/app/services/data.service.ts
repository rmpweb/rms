import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URL = "https://raw.githubusercontent.com/rmpweb/rmsb/master/data.json";
@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http: HttpClient) {
    }



    getContent() {
        return this.http.get(URL);
    }

}