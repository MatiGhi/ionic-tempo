import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { global } from './global';

@Injectable()
export class UserService {

    private url: string;

    constructor(private _http: HttpClient) { 
        this.url = global.url;
    }

    login(user: User):Observable<any> {
        
        //return this._http.get(`http://core.tempo.local/v2/auth/${user.usuario}/${user.password}`);
        return this._http.get(`${this.url}/auth/${user.usuario}/${user.password}`);

    }

}