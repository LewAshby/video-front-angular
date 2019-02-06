import { videoPreviewRouting } from './video-preview.routes';
import { RouterModule } from '@angular/router/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    CommonModule,
    videoPreviewRouting
  ],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoPreviewModule { }
