import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { MessageService } from './message-service';
import { HEROES } from './mock-hero'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class HeroService{

    private heroEndpoint="http://localhost:8080/hero";

    constructor(private messageService:MessageService,private http: HttpClient){

    }

    /*getHeros() : Observable<Hero[]>{
        this.messageService.add('HeroService:: Fetched HEROS');
        return of(HEROES);
    }*/

    getHeros() : Observable<Hero[]>{
        this.messageService.add('HeroService:: Fetched HEROS');
        return this.http.get<Hero[]>(this.heroEndpoint);
    }

    getHero(id: number): Observable<Hero>{
        this.messageService.add('HeroService:: Fetched HERO');
        return of(HEROES.find(hero => hero.id === id));
    }

}