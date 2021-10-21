import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.page.html',
  styleUrls: ['./pedir.page.scss'],
})
export class PedirPage implements OnInit {

  public scannedCode = null;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      App.exitApp();
    });
  }

  ngOnInit() {

  }

  readQRCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    );
  }

  delete() {
    this.scannedCode = null;
  }


}
