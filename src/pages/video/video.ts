import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Navbar, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { DomSanitizer } from '@angular/platform-browser';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  videoIds: any[] = [];
  errors: any[] = [];
  videoUrl: string = null;
  @ViewChild(Navbar) navBar: Navbar;

  constructor(private navCtrl: NavController, private navParams: NavParams, private http: HTTP, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      this.videoUrl = null;
      this.navCtrl.push(HomePage);
    };

    const base64Image = this.navParams.data.base64Image;

    try {
      this.http.post('https://pacific-reef-79944.herokuapp.com/', { base64Image }, { 'Content-Type': 'application/json' })
        .then(res => {
          const videoIds = res.data;
          this.videoIds = videoIds || [];
          this.videoUrl = `https://www.youtube.com/embed/${videoIds[0]}`;
        }).catch(err => this.errors.push(err));
    }
    catch (err) {
      this.errors.push(err);
    }

  }

  generateVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}