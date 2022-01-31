import { Component, OnInit } from '@angular/core';
import { Region } from '../interfaces/Region';
import { Departement } from '../interfaces/Departement';
import { REGIONS } from '../mocks/mock-regions';
import { LocationService } from '../location.service';
import { Commune } from '../interfaces/Commune';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  regionList: Region[] = [];
  departementList: Departement[] = [];
  communeList: Commune[] = [];
  selectedRegion: string = "";

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.locationService.getRegions()
        .subscribe(regions => this.regionList = regions);
  }

  getDepartements(codeDepartement: string): void {
    this.locationService.getDepartements(codeDepartement)
        .subscribe(departements => this.departementList = departements);
  }

  getCommunes(codeCommune: string): void {
    this.locationService.getCommunes(codeCommune)
        .subscribe(commune => this.communeList = commune);
  }

  setRegion(code: string): void {
    this.selectedRegion = code;
    this.getDepartements(code);
  }

  setDepartement(departement: Departement): void {
    this.departementList = []
    this.departementList.push(departement)
    this.getCommunes(departement.code)
  }

  setCommune(commune: Commune): void {
    this.communeList = []
    this.communeList.push(commune)
  }

  //display data all regions
  //select regions and display data region

}
