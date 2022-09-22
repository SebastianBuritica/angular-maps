import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent implements OnInit {

  // Lets inject our places service
  constructor( private placesService: PlacesService ) { }

  ngOnInit(): void {
  }

}
