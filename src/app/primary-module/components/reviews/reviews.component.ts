import { Component, AfterViewInit } from '@angular/core';


declare const google: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})


export class ReviewsComponent{
 
//ChIJLV1V2f09DTkRXVuw1myJclA
  service;
  public reviews = [];

  GOOGLE_PLACE_ID = "ChIJLV1V2f09DTkRXVuw1myJclA";

  constructor() {}

  ngAfterViewInit() {
    const request = {
      placeId: this.GOOGLE_PLACE_ID,
      fields: ['reviews']
    };
    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  public callback = (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
