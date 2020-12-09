import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class MessageService{
    message: String[]=[];

    add(message:String) : void{
        this.message.push(message);
    }

    clear(): void{
        this.message=[];
    }
}
