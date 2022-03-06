import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/model/tour';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  tourListMay: Tour[];
  tourListJune: Tour[];
  constructor() { 
    let tour1 = new Tour("Sun 22", "Zagreb, CROATIA", "Arenza Zagreb", "ON SALE");
    let tour2 = new Tour("Tue 24", "Belgrade, SERBIA", "Stark Arena", "ON SALE");
    let tour3 = new Tour("Thu 26", "Bucharest, ROMANIA", "Romexpo Open Air", "ON SALE");
    let tour4 = new Tour("Sun 29", "Kyiv, UKRAINE", "VDNG", "CANCELLED");
    this.tourListMay = [tour1, tour2, tour3, tour4];

    let tour5 = new Tour("Wed 1", "Moscow, RUSSIA", "VTB Arena", "CANCELLED");
    let tour6 = new Tour("Sat 4", "Hyvinkää, FINLAND", "Stark Arena", "ON SALE");
    let tour7 = new Tour("Tue 7", "Budapest, HUNGARY", "Groupma Arena", "ON SALE");
    let tour8 = new Tour("Sat 11", "Donington Park, UK", "Download Festival", "ON SALE");
    let tour9 = new Tour("Mon 13", "Belfast, UK", "Belsonic Festival", "ON SALE");
    let tour10 = new Tour("Thu 16", "Dessel, BELGIUM", "Graspop Metal Meeting", "ON SALE");
    let tour11 = new Tour("Sat 18", "Copenhagen, DENMARK", "Copenhell Festival", "ON SALE");
    let tour12 = new Tour("Mon 20", "Prague, CZECH REPUBLIC", "Sinobo Stadium", "ON SALE");
    let tour13 = new Tour("Thu 23", "Oslo, NORWAY", "Tons of Rock Festival", "ON SALE");
    let tour14 = new Tour("Sun 26", "Paris, FRANCE", "Paris La Defense Arena", "ON SALE");
    let tour15 = new Tour("Mon 27", "Arnhem, NETHERLANDS", "GelreDome", "ON SALE");
    let tour16 = new Tour("Thu 30", "Zurich, SWITZERLAND", "Hallenstadion", "ON SALE");

    this.tourListJune = [tour5, tour6, tour7, tour8, tour9, tour10, tour11, tour12, tour13, tour14, tour15, tour16]
  }

  ngOnInit(): void {
  }

}
