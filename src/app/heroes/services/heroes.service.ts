import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hero } from "../interfaces/heroe.interface";
import { environment } from "../../../environments/environment.development";
import { Observable, catchError, of } from "rxjs";
import { Params } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    constructor(private http: HttpClient) {
    }
    private baseUrl: string = environment.baseURL
    public heroes: Hero[] = []

    public getHeroes(): Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    public getHero(id:string): Observable<Hero | undefined>{
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
            catchError(error => of(undefined))
        )
    }

    public getSuggestions(query:string) :Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}`)
    }
}