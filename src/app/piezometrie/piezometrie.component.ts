import { Component, Input, OnInit } from '@angular/core';
import { Departement } from '../interfaces/Departement';
import { Commune } from '../interfaces/Commune';
import { Piezometrie } from '../interfaces/Piezometrie';
import { Region } from '../interfaces/Region';
import { PiezometrieService } from '../piezometrie.service';

@Component({
  selector: 'app-piezometrie',
  templateUrl: './piezometrie.component.html',
  styleUrls: ['./piezometrie.component.scss']
})
export class PiezometrieComponent implements OnInit {

  piezometrieList: Piezometrie[] = [];
  @Input()
  location!: Departement[];
  @Input()
  locationCommune!: Commune[];

  p: number = 1;

  constructor(private piezometrieService: PiezometrieService) { }

  ngOnInit(): void {
  }

  getPiezoDatas(): void {
    console.log("location ", this.location)
    this.piezometrieService.getPiezometrie(this.location)
    .subscribe(piezometrie => this.piezometrieList = piezometrie.data);
  }

  getPiezoDatasCommune(): void {
    console.log("locationCommune ", this.locationCommune)
    this.piezometrieService.getPiezometrieCommune(this.locationCommune)
    .subscribe(piezometrie => this.piezometrieList = piezometrie.data);
  }

  getLocationCommuneLength(): number {
    return this.locationCommune.length;
  }
}
