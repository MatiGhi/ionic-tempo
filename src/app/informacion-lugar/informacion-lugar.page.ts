import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

declare var google;

@Component({
  selector: 'app-informacion-lugar',
  templateUrl: './informacion-lugar.page.html',
  styleUrls: ['./informacion-lugar.page.scss'],
})
export class InformacionLugarPage implements OnInit {

  mapRef = null;

  svgMarker = {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: "#005F93",
    fillOpacity: 1,
    strokeColor: 'white',
    strokeWeight: 1,
    scale: 1
  };

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private callNumber: CallNumber,
    private launchNavigator: LaunchNavigator
  ) {

  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    //const loading = await this.loadingCtrl.create();
    //loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 17
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        //loading.dismiss();
        this.addMaker(myLatLng.lat, myLatLng.lng);
      });
  }

  

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      icon: this.svgMarker,
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

  private async getLocation() {
    let coordenadas = {
      lat: null,
      lng: null
    };

    await this.geolocation.getCurrentPosition().then((res) => {
      coordenadas.lat = res.coords.latitude;
      coordenadas.lng = res.coords.longitude;
    }).catch((error) => {
      console.log('error: ', error);
    });
    return coordenadas;

  }

  llamar() {
    this.callNumber.callNumber('912993220', true)
      .then(res => console.log('llamando: ', res))
      .catch(err => console.log('Error: ', err));
  }

  async navegar() {
    const myLatLng = await this.getLocation();
    let options: LaunchNavigatorOptions = {
      start: [myLatLng.lat, myLatLng.lng],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }

    this.launchNavigator.navigate('Gualeguaychu', options)
      .then(
        success => console.log('Launched navigator', success),
        error => console.log('Error launching navigator', error)
      );

  }

}
