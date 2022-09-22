import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // Defining properties
  public userLocation?: [number, number] 

  // Creating a getter
  get isUserLocationReady(): boolean {
    // We use double !! because we want to initialize the getter once we have a value in userLocation and it has
    // to be a boolean, if it was !this.userLocation it would be if it didnt have any value but in this case we want the
    // opposite so we use double !! to initialize it once we have a value
    return !!this.userLocation;
  } 

  // At the end we call our userLocation property as soon as our service is used anywhere in our app
  constructor() {
    this.getUserLocation();
   }

  // Creating a method to get the user location
  // GetcurrentPosition is a method of the navigator object, doesnt work in base of promises neither observables
  // So we have to do some type of convertion to make it a promise and know when it is done
  public async getUserLocation(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        // (args) => args.coords
        // We can destructurize the args object to get the coords property only and use it like this:
        // We access longitude first because mapbox works with longitude first and then latitude, in googlemaps is the opposite

        // ({ coords }) => resolve([ coords.longitude, coords.latitude ]),
        
        // Lets define our userLocation property with the coords we get from the navigator
        ({ coords }) => { 
          this.userLocation = [ coords.longitude, coords.latitude ];
          resolve( this.userLocation );
        },
        (err) => {
          alert(err)
          console.log(err)
          reject();
        }
      );

    });

  }

}
