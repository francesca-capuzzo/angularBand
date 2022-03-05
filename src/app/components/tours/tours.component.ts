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
    let tour7 = new Tour("Thu 26", "Bucharest, ROMANIA", "Romexpo Open Air", "ON SALE");
    let tour8 = new Tour("Sun 29", "Kyiv, UKRAINE", "VDNG", "CANCELLED");
    let tour9 = new Tour("Sun 22", "Zagreb, CROATIA", "Arenza Zagreb", "ON SALE");
    let tour10 = new Tour("Tue 24", "Belgrade, SERBIA", "Stark Arena", "ON SALE");
    let tour11 = new Tour("Thu 26", "Bucharest, ROMANIA", "Romexpo Open Air", "ON SALE");
    let tour12 = new Tour("Sun 29", "Kyiv, UKRAINE", "VDNG", "CANCELLED");
    let tour13 = new Tour("Sun 22", "Zagreb, CROATIA", "Arenza Zagreb", "ON SALE");
    let tour14 = new Tour("Tue 24", "Belgrade, SERBIA", "Stark Arena", "ON SALE");
    let tour15 = new Tour("Thu 26", "Bucharest, ROMANIA", "Romexpo Open Air", "ON SALE");
    let tour16 = new Tour("Sun 29", "Kyiv, UKRAINE", "VDNG", "CANCELLED");

    this.tourListJune = [tour5, tour6, tour7, tour8, tour9, tour10, tour11, tour12, tour13, tour14, tour15, tour16]
  }

  ngOnInit(): void {
  }

}
