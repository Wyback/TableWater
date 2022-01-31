import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Departement } from './interfaces/Departement';
import { Commune } from './interfaces/Commune';


@Injectable({
  providedIn: 'root'
})
export class PiezometrieService {
  private departementList = "";
  private communeList = "";

  constructor(private http: HttpClient) { }

  getPiezometrie(location: Departement[]): Observable<any> {
    if (location.length <= 0)
      return this.http.get<any>('https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?format=json')
    else
      location.forEach(departement => {
        this.departementList += departement.code + ","
      })
      return this.http.get<any>('https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_departement=' + this.departementList)
   }
   getPiezometrieCommune(location: Commune[]): Observable<any> {
    location.forEach(commune => {
      this.communeList += commune.code + ","
    })
    this.communeList = this.communeList.slice(0, -1);
    return this.http.get<any>('https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?code_commune=' + this.communeList)
   }
}
