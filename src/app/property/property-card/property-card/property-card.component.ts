import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    "ID" : 1,
    "Name" : "Ramen Residence",
    "Type" : "MaadiVeedu",
    "Price" : "25.5 Lakhs"
  }

  constructor() { }

  ngOnInit() {
  }

}
