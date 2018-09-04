import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Navbar } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  videoUrl: string = 'https://www.youtube.com/embed/qs2n_poLarc';
  @ViewChild(Navbar) navBar: Navbar;

  constructor(private navCtrl: NavController, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      this.videoUrl = null;
      this.navCtrl.push(HomePage);
    };
  }

  generateVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl); 
  }
}