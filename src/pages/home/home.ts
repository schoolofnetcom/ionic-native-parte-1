import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private browserTab: BrowserTab,
    private batteryStatus: BatteryStatus,
    private geolocation: Geolocation
  ) {
    this.browserTab.isAvailable()
      .then((isAvailable) => {
        if (isAvailable) {
          this.browserTab.openUrl('https://schoolofnet.com');
        } else {
          console.log('browser tab não disponível');
        }
      })

    const subscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status);
    });

    // subscription.unsubscribe();

    const options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
    this.geolocation.getCurrentPosition(options).then(resp => {
      console.log('getCurrentPosition', resp);
    });

    this.geolocation.watchPosition(options).subscribe(resp => {
      console.log('watchPosition', resp);
    })
  }

}
