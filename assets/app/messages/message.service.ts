import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    
    constructor(private http: Http){}
    
    addMessage(message: Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('https://7cd2586a91f844f1abe82ad17bba0146.vfs.cloud9.us-east-2.amazonaws.com/message', body, {headers: headers}).map((response: Response) => response.json())
        .catch((error: response) => Observable.throw(error.json()));
    }
    
    getMessages(){
        return this.messages;
    }
    
    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}