import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}
    
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('https://7cd2586a91f844f1abe82ad17bba0146.vfs.cloud9.us-east-2.amazonaws.com/user/', body, {headers: headers})
                .map((response: Response) => response.json())
                .catch((error: response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
    }
    
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('https://7cd2586a91f844f1abe82ad17bba0146.vfs.cloud9.us-east-2.amazonaws.com/user/signin', body, {headers: headers})
                .map((response: Response) => response.json())
                .catch((error: response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
    }
    
    logout() {
        localStorage.clear();
    }
    
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}