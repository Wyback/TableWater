import { Injectable } from '@angular/core';
import { Region } from './interfaces/Region';
import { Departement } from './interfaces/Departement';
import { REGIONS } from './mocks/mock-regions';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Commune } from './interfaces/Commune';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('https://geo.api.gouv.fr/regions?fields=nom,code')
  }

  getDepartements(codeRegion: string): Observable<Departement[]> {
    return this.http.get<Departement[]>('https://geo.api.gouv.fr/departements?codeRegion=' + codeRegion)
  }

  getCommunes(codeDepartement: string): Observable<Commune[]> {
    return this.http.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes?fields=nom,code,codeDepartement`)
  }
}
