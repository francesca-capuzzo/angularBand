import { Component, Input, OnInit } from '@angular/core';
import { Tour } from 'src/app/model/tour';

@Component({
  selector: 'app-tour-element',
  templateUrl: './tour-element.component.html',
  styleUrls: ['./tour-element.component.scss']
})
export class TourElementComponent implements OnInit {

  @Input() tour?: Tour;
  
  constructor() { }

  ngOnInit(): void {
  }

}
