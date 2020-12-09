import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { MessageService } from './message-service';
import { HEROES } from './mock-hero'

@Injectable({
    providedIn:'root'
})
export class HeroService{

    constructor(private messageService:MessageService){

    }

    getHeros() : Observable<Hero[]>{
        this.messageService.add('HeroService:: Fetched HEROS');
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero>{
        this.messageService.add('HeroService:: Fetched HERO');
        return of(HEROES.find(hero => hero.id === id));
    }

}