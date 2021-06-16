import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng,LeafletMouseEvent,marker,Marker,tileLayer } from 'leaflet';
import { coordinatesMap } from '../coordinate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value=> marker([value.latitude,value.longitude]));
  }

  options ={
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ maxZoom:18, attribution:'Paradis Island'})
    ],
    zoom: 5,
    center: latLng(-19.01927879438547,47.06542968750001)
  };
  layers: Marker<any>[] = [];
  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(latitude +','+ longitude);
    this.layers = [];
    this.layers.push(marker([latitude,longitude], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
     })
    }));
    this.onSelectedLocation.emit({latitude,longitude});
  }
}
