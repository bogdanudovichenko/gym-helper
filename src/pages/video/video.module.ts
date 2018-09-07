import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { VideoPage } from './video';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  providers: [
    HTTP
  ]
})
export class VideoPageModule {}
